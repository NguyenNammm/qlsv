import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.scss'],
})
export class InfomationComponent implements OnInit {
  name: any;
  msv: any;
  birth: any;
  cccd: any;
  sdt: any;
  nganh: any;
  lop: any;
  disable: any;
  studentName: any;
  constructor(public router: Router, private location: Location) {
    this.studentName = this.location.getState();
  }

  ngOnInit() {
    this.genForm();
    this.disable = true;
  }

  genForm() {
    switch (this.studentName.name) {
      case '1951064097': {
        this.name = 'Nguyễn Mộng Nam';
        this.msv = this.studentName.name;
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '59087603730';
        this.nganh = 'CNTT';
        this.lop = '61TH';
        break;
      }
      case '1951064099': {
        this.name = 'Phạm Thị Minh Nguyệt';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '5908459845';
        this.lop = '61TH';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';
        break;
      }
      case '1951064188': {
        this.name = 'Nguyễn Thanh Sơn';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '59087603569';
        this.lop = '61TH';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';

        break;
      }
      case '2051060402': {
        this.name = 'Trịnh Quốc Bảo';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '4690876135';
        this.lop = '63KTPM1';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';

        break;
      }
      case '2151170550': {
        this.name = 'Đặng Việt Anh';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '01087156';
        this.lop = '63KTPM1';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';

        break;
      }
      case '1951061109': {
        this.name = 'Phan Thế Tùng';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '10876037564';
        this.lop = '63KTPM1';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';

        break;
      }
      case '2051063905': {
        this.name = 'Trần Văn Phúc';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '9908760023';
        this.lop = '63KTPM1';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';

        break;
      }
      case '2151173783': {
        this.name = 'Nguyễn Chấn Hưng';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '11087603426';
        this.lop = '63KTPM1';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';

        break;
      }
      case '2151170582': {
        this.name = 'Trần Đức Anh';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '010876037489';
        this.lop = '63KTPM1';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';

        break;
      }
      case '2151173799': {
        this.name = 'Thiều Quang Minh';
        this.birth = '01/01/1980';
        this.cccd = '741919369521';
        this.sdt = '12876037998';
        this.lop = '63KTPM1';
        this.msv = this.studentName.name;
        this.nganh = 'CNTT';

        break;
      }
      default: {
        break;
      }
    }
  }

  edit() {
    this.disable = false;
    this.genForm();
  }
}
