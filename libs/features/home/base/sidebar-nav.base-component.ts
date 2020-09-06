import { Component, OnInit, Optional, Directive } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// libs
import { takeUntil, filter } from 'rxjs/operators';
import { BaseComponent } from '@dataform/core/base';

@Directive()
export abstract class SidebarNavBaseComponent extends BaseComponent
  implements OnInit {
  activeUrl: string;

  constructor(protected router: Router) {
    super();
    this.activeUrl = this.homePath;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe((e: NavigationEnd) => {
        this.activeUrl = e.url;
      });
  }
}
