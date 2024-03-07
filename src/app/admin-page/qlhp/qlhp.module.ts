import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QlhpComponent } from './qlhp.component';
import { GlobalModule } from '../../global.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: QlhpComponent }]),
  ],
  declarations: [QlhpComponent],
})
export class QlhpModule {}
