import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'qlsv2',
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
      {
        path: 'qlsv1',
        loadChildren: () =>
          import('./qlsv1/qlsv1.module').then((m) => m.Qlsv1Module),
      },
    ],
  },
];

export const AdminPageRoutes = RouterModule.forChild(routes);
