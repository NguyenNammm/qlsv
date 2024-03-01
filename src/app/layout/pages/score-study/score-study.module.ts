import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreStudyComponent } from './score-study.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../../../global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: ScoreStudyComponent }]),
  ],
  declarations: [ScoreStudyComponent],
})
export class ScoreStudyModule {}
