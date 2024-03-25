import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

interface ItemData {
  id: number;
  tenCTY: any;
  tenCso: any;
  tieuDe: any;
  noiDung: any;
  viTri: any;
  moTa: any;
  diaChi: any;
  diaDiem: any;
  yeuCau: any;
  thoiGian: any;
}

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
})
export class BonusComponent implements OnInit {
  local: any;
  option: any;
  constructor(
    public router: Router,
    private location: Location,
    private modal: NzModalService
  ) {
    this.local = this.location.getState();
  }
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
  listOfData: ItemData[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
      this.showConfirm();
    } else {
      this.setOfCheckedId.delete(id);
      this.showDeleteConfirm();
    }
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: '<i>Đồng ý đăng kí?</i>',
      nzOnOk: () => console.log('OK'),
      nzOkText: 'Đồng ý',
      nzCancelText: 'Hủy',
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Hủy đăng kí?',
      nzOkText: 'Đồng ý',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Hủy',
      nzOnCancel: () => console.log('Cancel'),
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

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

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
    this.option = this.local.option;
    console.log(this.local.option);
    if (this.option === 1) {
      this.listOfData = [];
      this.listOfData.push(
        {
          id: 1,
          tenCTY: 'Công ty phần mềm',
          tenCso: '',
          tieuDe: '',
          noiDung: '',
          viTri: 'Hà Nội',
          moTa: 'Công ty phát triển phần mềm',
          diaChi: '',
          diaDiem: '',
          thoiGian: '',
          yeuCau: 'Tốt nghiệp Khoa Công nghệ thông tin',
        },
        {
          id: 2,
          tenCTY: 'Công ty sản xuất',
          tenCso: '',
          tieuDe: '',
          noiDung: '',
          viTri: 'Hà Nội',
          moTa: 'Sản xuất, kinh doanh ô tô, xe máy, xe có động cơ và phụ kiện',
          diaChi: '',
          diaDiem: '',
          thoiGian: '',
          yeuCau: 'Tốt nghiệp khoa Kỹ thuật',
        },
        {
          id: 3,
          tenCTY: 'Công ty kinh doanh',
          tenCso: '',
          tieuDe: '',
          noiDung: '',
          viTri: 'Hà Nội',
          moTa: 'Kinh doanh',
          diaChi: '',
          diaDiem: '',
          thoiGian: '',
          yeuCau: 'Tốt nghiệp khoa Quản trị kinh doanh',
        }
      );
    }
    if (this.option === 2) {
      this.listOfData = [];
      this.listOfData.push(
        {
          id: 1,
          tenCTY: '',
          tenCso: 'Cơ sở thực tập CNTT',
          tieuDe: '',
          noiDung: '',
          viTri: 'Hải Phòng',
          moTa: '',
          diaChi: 'Xã Giang Biên, Huyện Vĩnh Bảo, Hải Phòng',
          diaDiem: '',
          thoiGian: '6 Tuần',
          yeuCau: '',
        },
        {
          id: 2,
          tenCTY: '',
          tenCso: 'Cơ sở thực tập Kỹ thuật',
          tieuDe: '',
          noiDung: '',
          viTri: 'Lai Châu',
          moTa: '',
          diaChi: 'Xã Thân Thuộc, Huyện Tân Uyên, Lai Châu',
          diaDiem: '',
          thoiGian: '6 Tuần',
          yeuCau: '',
        },
        {
          id: 3,
          tenCTY: '',
          tenCso: 'Cơ sở thực tập ',
          tieuDe: '',
          noiDung: '',
          viTri: 'Ninh Bình',
          moTa: '',
          diaChi: 'Xã Yên Mỹ, Huyện Yên Mô, Ninh Bình',
          diaDiem: '',
          thoiGian: '6 Tuần',
          yeuCau: '',
        }
      );
    }
    if (this.option === 3) {
      this.listOfData = [];
      this.listOfData.push(
        {
          id: 1,
          tenCTY: '',
          tenCso: '',
          tieuDe: 'Chia sẻ kinh nghiệm',
          noiDung: '',
          viTri: '',
          moTa: 'Kinh nghiệm trả lời phỏng vấn',
          diaChi: '',
          diaDiem: 'Tòa K1',
          thoiGian: '14h00-16h00 29/02/2024',
          yeuCau: '',
        },
        {
          id: 2,
          tenCTY: '',
          tenCso: '',
          tieuDe: 'Chia sẻ kinh nghiệm',
          noiDung: '',
          viTri: '',
          moTa: 'Chia sẻ kinh nghiệm học tập và nghiên cứu trong sinh viên',
          diaChi: '',
          diaDiem: 'Tòa K1',
          thoiGian: '14h00-16h00 15/02/2024',
          yeuCau: '',
        },
        {
          id: 3,
          tenCTY: '',
          tenCso: '',
          tieuDe: 'Chia sẻ kinh nghiệm',
          noiDung: '',
          viTri: '',
          moTa: 'Kinh nghiệm lựa chọn nơi thực tập',
          diaChi: '',
          diaDiem: 'Tòa K1',
          thoiGian: '14h00-16h00 06/02/2024',
          yeuCau: '',
        }
      );
    }
    if (this.option === 4) {
      this.listOfData = [];
      this.listOfData.push(
        {
          id: 1,
          tenCTY: '',
          tenCso: '',
          tieuDe: '',
          noiDung: 'Xét và cấp học bổng khuyến khích học tập',
          viTri: '',
          moTa: '',
          diaChi: '',
          diaDiem: '',
          thoiGian: '15h30 27/02/2024 ',
          yeuCau:
            'Học bổng loại Khá: sinh viên có điểm trung bình học tập và điểm rèn luyện loại Khá trở lên trong học kỳ xét học bổng KKHT',
        },
        {
          id: 2,
          tenCTY: '',
          tenCso: '',
          tieuDe: '',
          noiDung: 'Sinh viên được miễn giảm học phí',
          viTri: '',
          moTa: '',
          diaChi: '',
          diaDiem: '',
          thoiGian: '13h30 25/02/2024',
          yeuCau: 'Sinh viên có hoàn cảnh đặc biệt',
        },
        {
          id: 3,
          tenCTY: '',
          tenCso: '',
          tieuDe: '',
          noiDung:
            'Sinh viên được hưởng trợ cấp xã hội và hỗ trợ chi phí học tập',
          viTri: '',
          moTa: '',
          diaChi: '',
          diaDiem: '',
          thoiGian: '13h30 12/02/2024',
          yeuCau: 'Sinh viên có hoàn cảnh đặc biệt',
        }
      );
    }
  }
}
