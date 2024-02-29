import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRegisterStudyComponent } from './list-register-study.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ListRegisterStudyComponent },
    ]),
    CommonModule,
  ],
  declarations: [ListRegisterStudyComponent],
})
export class ListRegisterStudyModule {}
