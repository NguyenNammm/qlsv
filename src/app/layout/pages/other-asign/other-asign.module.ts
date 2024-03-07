import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherAsignComponent } from './other-asign.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../../../global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: OtherAsignComponent }]),
  ],
  declarations: [OtherAsignComponent],
})
export class OtherAsignModule {}
