import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterStudyComponent } from './register-study.component';
import { GlobalModule } from '../../../global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: RegisterStudyComponent }]),
  ],
  declarations: [RegisterStudyComponent],
})
export class RegisterStudyModule {}
