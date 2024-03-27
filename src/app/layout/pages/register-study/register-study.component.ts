import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

interface ItemData {
  id: number;
  name: any;
  age: string;
  address: string;
}
interface ItemData2 {
  id: any;
  name: any;
  age: any;
  address: any;
}

@Component({
  selector: 'app-register-study',
  templateUrl: './register-study.component.html',
  styleUrls: ['./register-study.component.scss'],
})
export class RegisterStudyComponent implements OnInit {
  block: any;
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0)
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0)
        );
        this.refreshCheckedStatus();
      },
    },
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  listOfData2: ItemData2[] = [];
  setOfCheckedId = new Set<number>();

  constructor(private modal: NzModalService) {}

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
      this.showConfirm(id);
    } else {
      this.setOfCheckedId.delete(id);
      this.showDeleteConfirm(id);
    }
  }

  showConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: '<i>Đăng kí môn học đã chọn?</i>',
      // nzContent: '<b>Some descriptions</b>',
      nzOkText: 'Đăng kí',
      nzCancelText: 'Hủy',
      nzOnOk: () => this.updateValue(this.setOfCheckedId.size, 1),
      nzOnCancel: () => this.setOfCheckedId.delete(id),
    });
  }

  showDeleteConfirm(id: number): void {
    this.modal.confirm({
      nzTitle: 'Hủy đăng kí môn đã chọn?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Hủy đăng kí',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.updateValue(this.setOfCheckedId.size, 2),
      nzCancelText: 'Hủy',
      nzOnCancel: () => this.setOfCheckedId.add(id),
    });
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
  }

  // onCurrentPageDataChange($event: readonly ItemData[]): void {
  //   this.listOfCurrentPageData = $event;
  //   this.refreshCheckedStatus();
  // }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }

  ngOnInit(): void {
    this.listOfData = new Array(5).fill(0).map((_, index) => ({
      id: index,
      name: ` ${index + 1}`,
      age: '45 Tiết',
      address: `Tuần ${index}`,
    }));
  }
  updateValue(item: any, casee: any) {
    if (item % 2 !== 0) {
      this.block = 2;
    } else this.block = 3;
    let number =
      Math.floor(Math.random() * (999 - 100 + 1) + 100) + '- A' + this.block;
    if (casee === 1) {
      this.listOfData2.push({
        id: item,
        name: `${number}`,
        age: '45 Tiết',
        address: `Tuần ${item}`,
      });
    }
    if (casee === 2) {
      this.listOfData2.pop();
    }
  }
}
