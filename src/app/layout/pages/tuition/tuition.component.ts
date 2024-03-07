import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

interface Person {
  key: string;
  type: string;
  year: string;
  money: any;
}
@Component({
  selector: 'app-tuition',
  templateUrl: './tuition.component.html',
  styleUrls: ['./tuition.component.scss'],
})
export class TuitionComponent implements OnInit {
  studentName: any;
  name: any;
  stk: any;
  class: any;
  msv: any;
  payed: any;
  unpayed: any;

  listOfData: Person[] = [
    {
      key: '1',
      type: 'Học phí',
      year: '1_2021_2022',
      money: 5795000,
    },
    {
      key: '2',
      type: 'Học phí',
      year: '2_2021_2022',
      money: 5695000,
    },
    {
      key: '3',
      type: 'Học phí',
      year: '1_2022_2023',
      money: 6795000,
    },
    {
      key: '4',
      type: 'Học phí',
      year: '2_2022_2023',
      money: 5795000,
    },
    {
      key: '5',
      type: 'Học phí',
      year: '1_2023_2024',
      money: 5795000,
    },
  ];
  constructor(public router: Router, private location: Location) {
    this.studentName = this.location.getState();
  }

  ngOnInit() {
    console.log(this.studentName.name);
    switch (this.studentName.name) {
      case '1951064097': {
        this.name = 'Nguyễn Mộng Nam';
        this.stk = '59087603730';
        this.class = '61TH';
        this.msv = this.studentName.name;
        this.payed = '18245000';
        this.unpayed = '11630000';
        break;
      }
      case '1951064099': {
        this.name = 'Phạm Thị Minh Nguyệt';
        this.stk = '5908459845';
        this.class = '61TH';
        this.msv = this.studentName.name;
        this.payed = '20945000';
        this.unpayed = '89300000';
        break;
      }
      case '1951064188': {
        this.name = 'Nguyễn Thanh Sơn';
        this.stk = '59087603569';
        this.class = '61TH';
        this.msv = this.studentName.name;
        this.payed = '21569000';
        this.unpayed = '83060000';
        break;
      }
      case '2051060402': {
        this.name = 'Trịnh Quốc Bảo';
        this.stk = '4690876135';
        this.class = '63KTPM1';
        this.msv = this.studentName.name;
        this.payed = '25105000';
        this.unpayed = '47700000';
        break;
      }
      case '2151170550': {
        this.name = 'Đặng Việt Anh';
        this.stk = '01087156';
        this.class = '63KTPM1';
        this.msv = this.studentName.name;
        this.payed = '29875000';
        this.unpayed = '0';
        break;
      }
      case '1951061109': {
        this.name = 'Phan Thế Tùng';
        this.stk = '10876037564';
        this.class = '63KTPM1';
        this.msv = this.studentName.name;
        this.payed = '29875000';
        this.unpayed = '0';
        break;
      }
      case '2051063905': {
        this.name = 'Trần Văn Phúc';
        this.stk = '9908760023';
        this.class = '63KTPM1';
        this.msv = this.studentName.name;
        this.payed = '26235000';
        this.unpayed = '36400000';
        break;
      }
      case '2151173783': {
        this.name = 'Nguyễn Chấn Hưng';
        this.stk = '11087603426';
        this.class = '63KTPM1';
        this.msv = this.studentName.name;
        this.payed = '29875000';
        this.unpayed = '0';
        break;
      }
      case '2151170582': {
        this.name = 'Trần Đức Anh';
        this.stk = '010876037489';
        this.class = '63KTPM1';
        this.msv = this.studentName.name;
        this.payed = '26987000';
        this.unpayed = '28880000';
        break;
      }
      case '2151173799': {
        this.name = 'Thiều Quang Minh';
        this.stk = '12876037998';
        this.class = '63KTPM1';
        this.msv = this.studentName.name;
        this.payed = '29875000';
        this.unpayed = '0';
        break;
      }
      default: {
        break;
      }
    }
  }
}
