import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isCollapsed = true;
  visible = false;
  public studentName: any;
  name: any;
  student: any;
  constructor(
    public router: Router,
    private location: Location,
    private modal: NzModalService
  ) {
    this.studentName = this.location.getState();
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`], { state: { name: this.name } });
  }

  logout(): void {
    this.modal.confirm({
      nzTitle: 'Bạn có muốn đăng xuất không?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Đăng xuất',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.router.navigate([`/login`]),
      nzCancelText: 'Hủy',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  ngOnInit() {
    this.name = this.studentName.name;
    this.studentName = this.studentName.name;
    if (this.studentName === 'admin') {
      this.studentName = 'Admin';
      this.student = 'Admin';
    }
    switch (this.studentName) {
      case '1951064097': {
        this.student = 'Nguyễn Mộng Nam';
        break;
      }
      case '1951064099': {
        this.student = 'Phạm Thị Minh Nguyệt';
        break;
      }
      case '1951064188': {
        this.student = 'Nguyễn Thanh Sơn';
        break;
      }
      case '2051060402': {
        this.student = 'Trịnh Quốc Bảo';
        break;
      }
      case '2151170550': {
        this.student = 'Đặng Việt Anh';

        break;
      }
      case '1951061109': {
        this.student = 'Phan Thế Tùng';

        break;
      }
      case '2051063905': {
        this.student = 'Trần Văn Phúc';
        break;
      }
      case '2151173783': {
        this.student = 'Nguyễn Chấn Hưng';

        break;
      }
      case '2151170582': {
        this.student = 'Trần Đức Anh';
        break;
      }
      case '2151173799': {
        this.student = 'Thiều Quang Minh';

        break;
      }
      default: {
        break;
      }
    }
  }
}
