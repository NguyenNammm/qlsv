import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRegisterStudyComponent } from './list-register-study.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../../../global.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ListRegisterStudyComponent },
    ]),
    CommonModule,
    GlobalModule,
  ],
  declarations: [ListRegisterStudyComponent],
})
export class ListRegisterStudyModule {}
