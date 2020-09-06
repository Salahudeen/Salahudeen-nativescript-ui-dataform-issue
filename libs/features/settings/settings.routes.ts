import { Routes, Route } from '@angular/router';

export function routesSettings(settings: any, extras: Route = {}): Routes {
  return [
    {
      path: '',
      component: settings,
      ...extras,
    },
  ];
}
