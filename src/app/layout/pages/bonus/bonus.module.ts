import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusComponent } from './bonus.component';
import { GlobalModule } from '../../../global.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: BonusComponent }]),
  ],
  declarations: [BonusComponent],
})
export class BonusModule {}
