import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterStudyComponent } from './register-study.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RegisterStudyComponent }]),
  ],
  declarations: [RegisterStudyComponent],
})
export class RegisterStudyModule {}
