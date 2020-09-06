import { LayoutComponent } from './layout/layout.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';

export const HOME_COMPONENTS: any[] = [
  LayoutComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
];

export * from './layout/layout.component';
export * from './sidebar-nav/sidebar-nav.component';
export * from './sidebar-header/sidebar-header.component';
