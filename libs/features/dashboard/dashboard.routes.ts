import { Routes } from '@angular/router';

export function routeDashboard(
  index: any,
  // detail: any,
  // gatheringDetail: any,
  gatheringDetailExtras: any = {}
): Routes {
  return [
    {
      path: '',
      component: index,
    },
    // {
    //   path: ':slug',
    //   component: detail,
    //   children: [
    //     {
    //       path: ':slug',
    //       component: gatheringDetail,
    //       ...gatheringDetailExtras,
    //     },
    //   ],
    // },
  ];
}
