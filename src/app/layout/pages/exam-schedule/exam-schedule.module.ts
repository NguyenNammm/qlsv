import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamScheduleComponent } from './exam-schedule.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../../../global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: ExamScheduleComponent }]),
  ],
  declarations: [ExamScheduleComponent],
})
export class ExamScheduleModule {}
