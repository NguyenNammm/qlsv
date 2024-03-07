import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
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
    this.studentName = 'Admin';
    this.student = 'Admin';
  }
}
