import { Component, OnInit, ViewChild } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject, takeUntil } from 'rxjs';

export interface Data {
  index: number;
  name: string;
  evaluate: string;
  scoreN: number;
  scoreC: string;
}
@Component({
  selector: 'app-score-study',
  templateUrl: './score-study.component.html',
  styleUrls: ['./score-study.component.scss'],
})
export class ScoreStudyComponent implements OnInit {
  constructor() {}

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<Data>;
  private destroy$ = new Subject<boolean>();
  listOfData: Data[] = [];
  evaluate: any;

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  trackByIndex(_: number, data: Data): number {
    return data.index;
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      if (i % 2 == 0) {
        this.evaluate = 'Giỏi';
      } else this.evaluate = 'Khá';
      data.push({
        index: i,
        name: `CSE42` + i,
        evaluate: this.evaluate,
        scoreN: i,
        scoreC: `London`,
      });
    }
    this.listOfData = data;
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
