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
  constructor(
    public router: Router,
    private location: Location,
    private modal: NzModalService
  ) {
    this.studentName = this.location.getState();
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
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
    this.studentName = this.studentName.name;
  }
}
