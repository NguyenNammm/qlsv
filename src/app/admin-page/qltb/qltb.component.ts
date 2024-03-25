import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

interface Person {
  key: number;
  ten: string;
  nd: string;
}

@Component({
  selector: 'app-qltb',
  templateUrl: './qltb.component.html',
  styleUrls: ['./qltb.component.scss'],
})
export class QltbComponent implements OnInit {
  option: any;
  local: any;
  ten: any;
  nd: any;
  key: any;
  selectedValue: any;
  isVisible = false;
  listOfData: Person[] = [
    {
      key: 1,
      ten: 'Nộp học phí',
      nd: 'Thông báo bắt đầu thu học phí học kì 1 2023-2024',
    },
    {
      key: 2,
      ten: 'Đăng kí học phần',
      nd: 'Thông báo thời gian bắt đầu đăng kí học học kì 1 2023-2024',
    },
    {
      key: 3,
      ten: 'Chuẩn tiếng anh đầu ra',
      nd: 'Thông báo thời gian bắt đầu đăng kí thi chuẩn tiếng anh đầu ra',
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
        item.nd = this.nd;
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
