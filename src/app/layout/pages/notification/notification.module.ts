import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../../../global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: NotificationComponent }]),
  ],
  declarations: [NotificationComponent],
})
export class NotificationModule {}
