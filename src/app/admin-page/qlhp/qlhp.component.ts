import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

interface Person {
  key: number;
  ten: string;
  lop: string;
}

@Component({
  selector: 'app-qlhp',
  templateUrl: './qlhp.component.html',
  styleUrls: ['./qlhp.component.scss'],
})
export class QlhpComponent implements OnInit {
  option: any;
  local: any;
  ten: any;
  lop: any;
  key: any;
  selectedValue: any;
  isVisible = false;
  listOfData: Person[] = [
    {
      key: 1,
      ten: 'Phát triển dự án phần mềm',
      lop: '63KTPM1',
    },
    {
      key: 2,
      ten: 'Học máy',
      lop: '62TH4',
    },
    {
      key: 3,
      ten: 'Giải tích hàm nhiều biến',
      lop: '65TH1',
    },
  ];

  constructor(private modal: NzModalService) {}
  ngOnInit() {}
  showModal(item: any): void {
    this.key = item;
    this.isVisible = true;
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
        item.lop = this.lop;
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
