import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/layout/trang-chu' },
      {
        path: 'trang-chu',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'dang-ki-hoc',
        loadChildren: () =>
          import('./pages/register-study/register-study.module').then(
            (m) => m.RegisterStudyModule
          ),
      },
      {
        path: 'thong-tin-dang-ki-hoc',
        loadChildren: () =>
          import('./pages/list-register-study/list-register-study.module').then(
            (m) => m.ListRegisterStudyModule
          ),
      },
      {
        path: 'diem-thi',
        loadChildren: () =>
          import('./pages/score-study/score-study.module').then(
            (m) => m.ScoreStudyModule
          ),
      },
      {
        path: 'lich-thi',
        loadChildren: () =>
          import('./pages/exam-schedule/exam-schedule.module').then(
            (m) => m.ExamScheduleModule
          ),
      },
      {
        path: 'hoc-phi',
        loadChildren: () =>
          import('./pages/tuition/tuition.module').then((m) => m.TuitionModule),
      },
      {
        path: 'thong-bao',
        loadChildren: () =>
          import('./pages/notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
      {
        path: 'dang-ky-khac',
        loadChildren: () =>
          import('./pages/other-asign/other-asign.module').then(
            (m) => m.OtherAsignModule
          ),
      },
      {
        path: 'tra-cuu',
        loadChildren: () =>
          import('./pages/search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'thong-tin',
        loadChildren: () =>
          import('./pages/infomation/infomation.module').then(
            (m) => m.InfomationModule
          ),
      },
      {
        path: 'form',
        loadChildren: () =>
          import('./pages/bonus/bonus.module').then((m) => m.BonusModule),
      },
    ],
  },
];

export const LayoutRoutes = RouterModule.forChild(routes);
