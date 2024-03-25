import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

interface Person {
  key: number | null;
  ten: string;
  msv: number | null;
}

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.scss'],
})
export class DetailAdminComponent implements OnInit {
  option: any;
  local: any;
  ten: any;
  msv: any;
  key: any;
  selectedValue: any;
  isVisible = false;
  listOfData: Person[] = [
    {
      key: 1,
      ten: 'Sinh viên 1',
      msv: 2051063466,
    },
    {
      key: 2,
      ten: 'Sinh viên 2',
      msv: 2051061535,
    },
    {
      key: 3,
      ten: 'Sinh viên 3',
      msv: 2051069846,
    },
  ];

  constructor(
    public router: Router,
    private location: Location,
    private modal: NzModalService
  ) {
    this.local = this.location.getState();
  }
  ngOnInit() {
    switch (this.local.number) {
      case 1: {
        this.selectedValue = 'Lớp 62PM2';
        break;
      }
      case 2: {
        this.selectedValue = 'Lớp 63KTPM1';
        break;
      }
      case 3: {
        this.selectedValue = 'Lớp 63KTPM2';
        break;
      }
      case 3: {
        this.selectedValue = 'Lớp 62TH';
        break;
      }
      case 4: {
        this.selectedValue = 'Lớp 61TH';

        break;
      }
      default: {
        break;
      }
    }
  }
  showModal(item: any): void {
    this.key = item;
    this.isVisible = true;
  }

  change(event: any) {
    this.listOfData = this.listOfData.filter(
      (item) => item.msv == event.target.value
    );
  }

  showDeleteConfirm(key: number): void {
    this.listOfData = this.listOfData.filter((item) => item.key !== key);
  }
  deleteAction(item: any) {
    this.modal.confirm({
      nzTitle: 'Xóa sinh viên đã chọn?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Xác nhận',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.showDeleteConfirm(item),
      nzCancelText: ' Hủy',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
  handleOk(): void {
    this.listOfData.forEach((item) => {
      if (this.key === item.key) {
        item.msv = this.msv;
        item.ten = this.ten;
      }
    });
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
