import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuitionComponent } from './tuition.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TuitionComponent }]),
  ],
  declarations: [TuitionComponent],
})
export class TuitionModule {}
