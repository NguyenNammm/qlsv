import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  key: number;
  ten: string;
  lop: string;
}

@Component({
  selector: 'app-qlsv1',
  templateUrl: './qlsv1.component.html',
  styleUrls: ['./qlsv1.component.scss'],
})
export class Qlsv1Component implements OnInit {
  option: any;
  local: any;
  listOfData: Person[] = [
    {
      key: 1,
      ten: 'Giảng viên lớp 62PM2',
      lop: 'Lớp 62PM2',
    },
    {
      key: 2,
      ten: 'Giảng viên lớp 63KTPM1',
      lop: 'Lớp 63KTPM1',
    },
    {
      key: 3,
      ten: 'Giảng viên lớp 63KTPM2',
      lop: 'Lớp 63KTPM2',
    },
    {
      key: 4,
      ten: 'Giảng viên lớp 62TH',
      lop: 'Lớp 62TH',
    },
    {
      key: 5,
      ten: 'Giảng viên lớp 61TH',
      lop: 'Lớp 61TH',
    },
  ];

  constructor(public router: Router) {
    //   this.local = this.location.getState();
  }
  ngOnInit() {
    // console.log(this.local);
    // this.option = this.local.option;
    // console.log(this.local.option);
  }
}
