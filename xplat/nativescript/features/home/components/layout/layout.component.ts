import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';

// libs
import { TranslateService } from '@ngx-translate/core';
import { WindowService } from '@dataform/core';

// nativescript
import { Page } from '@nativescript/core/ui/page';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import {
  PushTransition,
  DrawerTransitionBase,
  SlideInOnTopTransition,
  ScaleDownPusherTransition,
  ReverseSlideOutTransition,
  SlideAlongTransition,
  RadSideDrawer,
} from 'nativescript-ui-sidedrawer';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid } from '@nativescript/core/platform';
import { Application } from '@nativescript/core';

// app
import { AppService, DrawerService } from '@dataform/nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'dataform-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild(RadSideDrawerComponent, { static: true })
  public drawerComponent: RadSideDrawerComponent;
  private _sideDrawerTransition: DrawerTransitionBase;

  constructor(
    protected cdRef: ChangeDetectorRef,
    private vcRef: ViewContainerRef,
    private translate: TranslateService,
    private routerExt: RouterExtensions,
    private win: WindowService,
    public appService: AppService,
    public drawerService: DrawerService
  ) {
    // super(cdRef);
    // this.page.on('loaded', this.onLoaded, this);
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  public get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  ngAfterViewInit() {
    this.drawerService.drawer = this.drawerComponent.sideDrawer;
    this.cdRef.detectChanges();
  }

  isComponentSelected(url: string): boolean {
    return true;
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExt.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    });
    const sideDrawer = <RadSideDrawer>(<unknown>Application.getRootView());
    console.log(sideDrawer);
    sideDrawer.closeDrawer();
  }
}
