import { Injectable, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { isAndroid } from '@nativescript/core/platform';
import { Subject, BehaviorSubject } from 'rxjs';
import { WindowService, LogService } from '@dataform/core';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class DrawerService {
  public activeRoute$: BehaviorSubject<string> = new BehaviorSubject(null);
  public openWeb$: Subject<{ title: string; url: string }> = new Subject();
  private _drawer: RadSideDrawer;
  private _tagsInit = false;
  private _gesturesEnabled = true;

  constructor(
    private _router: Router,
    private _log: LogService,
    private _win: WindowService
  ) {
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.toggle(false);
        this._log.debug('router:', e.url);
        this.activeRoute$.next(e.url);
      }
    });
  }

  public get drawer() {
    return this._drawer;
  }

  public set drawer(value: RadSideDrawer) {
    this._drawer = value;

    // setup drawer event handling
    if (!this._tagsInit) {
      this._tagsInit = true;
      this._drawer.on('drawerOpened', () => {
        if (!this._gesturesEnabled) {
          // ensure gestures are turned back on always when opening (ignoring internal state)
          this.toggleGestures(true, false);
        }
      });
      this._drawer.on('drawerClosed', () => {
        if (!this._gesturesEnabled) {
          // ensure gestures are turned back off
          this.toggleGestures(false);
        }
      });
    }
  }

  public toggle(force?: boolean) {
    if (this.drawer) {
      if (typeof force !== 'undefined') {
        if (force === false && this.drawer.getIsOpen()) {
          this.drawer.closeDrawer();
        }
      } else {
        this.drawer.toggleDrawerState();
      }
    }
  }

  public toggleGestures(value: boolean, trackInternally: boolean = true) {
    this.drawer.gesturesEnabled = value;
    // used to help control gestures when opening drawer via button even if gestures were initially off
    if (trackInternally) {
      this._gesturesEnabled = value;
    }
  }
}
