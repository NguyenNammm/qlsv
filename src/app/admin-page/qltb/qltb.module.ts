import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QltbComponent } from './qltb.component';
import { GlobalModule } from '../../global.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: QltbComponent }]),
  ],
  declarations: [QltbComponent],
})
export class QltbModule {}
