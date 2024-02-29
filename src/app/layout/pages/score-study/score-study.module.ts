import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreStudyComponent } from './score-study.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ScoreStudyComponent }]),
  ],
  declarations: [ScoreStudyComponent],
})
export class ScoreStudyModule {}
