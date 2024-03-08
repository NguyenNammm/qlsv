import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Qlsv1Component } from './qlsv1.component';
import { GlobalModule } from '../../global.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: Qlsv1Component }]),
  ],
  declarations: [Qlsv1Component],
})
export class Qlsv1Module {}
