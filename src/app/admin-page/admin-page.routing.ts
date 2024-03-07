import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'qlsv',
        loadChildren: () =>
          import('./qlsv/detail-admin.module').then((m) => m.DetailAdminModule),
      },
      {
        path: 'qlgv',
        loadChildren: () =>
          import('./qlgv/qlgv.module').then((m) => m.QlgvModule),
      },
      {
        path: 'qltb',
        loadChildren: () =>
          import('./qltb/qltb.module').then((m) => m.QltbModule),
      },
      {
        path: 'qlhp',
        loadChildren: () =>
          import('./qlhp/qlhp.module').then((m) => m.QlhpModule),
      },
    ],
  },
];

export const AdminPageRoutes = RouterModule.forChild(routes);
