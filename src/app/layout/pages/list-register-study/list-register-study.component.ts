import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  name: string;
  class: string;
}
@Component({
  selector: 'app-list-register-study',
  templateUrl: './list-register-study.component.html',
  styleUrls: ['./list-register-study.component.scss'],
})
export class ListRegisterStudyComponent implements OnInit {
  listWeek: Array<{ label: string; value: string }> = [];
  public week = 'Tuần thứ 1';

  listOfData: Person[] = [
    {
      key: '1',
      name: 'Tiết 1',
      class: 'Phát triển dự án phần mềm - 63KTPM1',
    },
    {
      key: '2',
      name: 'Tiết 2',
      class: 'Phát triển dự án phần mềm  - 63KTPM1',
    },
    {
      key: '3',
      name: 'Tiết 3',
      class: 'Phát triển dự án phần mềm  - 63KTPM1',
    },
    {
      key: '4',
      name: 'Tiết 4',
      class: '',
    },
    {
      key: '5',
      name: 'Tiết 5',
      class: '',
    },
    {
      key: '6',
      name: 'Tiết 6',
      class: '',
    },
    {
      key: '7',
      name: 'Tiết 7',
      class: '',
    },
    {
      key: '8',
      name: 'Tiết 8',
      class: '',
    },
    {
      key: '9',
      name: 'Tiết 9',
      class: '',
    },
  ];
  constructor() {}

  ngOnInit() {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 1; i < 50; i++) {
      children.push({ label: 'Tuần thứ ' + i, value: 'Tuần thứ ' + i });
    }
    this.listWeek = children;
  }
}
