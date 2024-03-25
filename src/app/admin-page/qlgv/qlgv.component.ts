import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

interface Person {
  key: number;
  ten: string;
  mgv: string;
}

@Component({
  selector: 'app-qlgv',
  templateUrl: './qlgv.component.html',
  styleUrls: ['./qlgv.component.scss'],
})
export class QlgvComponent implements OnInit {
  option: any;
  ten: any;
  mgv: any;
  key: any;
  isVisible = false;
  listOfData: Person[] = [
    {
      key: 1,
      ten: 'Giảng viên 1',
      mgv: 'GVTLU001',
    },
    {
      key: 2,
      ten: 'Giảng viên 2',
      mgv: 'GVTLU002',
    },
    {
      key: 3,
      ten: 'Giảng viên 3',
      mgv: 'GVTLU003',
    },
  ];
  constructor(private modal: NzModalService) {}
  ngOnInit() {}
  change(event: any) {
    this.listOfData = this.listOfData.filter(
      (item) => item.mgv == event.target.value
    );
  }
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
        item.mgv = this.mgv;
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
