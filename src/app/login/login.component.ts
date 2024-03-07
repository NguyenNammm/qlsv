import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  name: any;
  constructor(
    public router: Router,
    private fb: NonNullableFormBuilder,
    private message: NzMessageService
  ) {}

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    // remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    // remember: [true],
  });

  submitForm(): void {
    if (!this.validateForm.valid) {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
      const user = [
        '1951064097',
        '1951064099',
        '1951064188',
        '2051060402',
        '2151170550',
        '1951061109',
        '2051063905',
        '2151173783',
        '2151170582',
        '2151173799',
        'admin',
      ];
      const password = '1';
      console.log(this.validateForm.value);

      for (let i = 0; i < user.length; i++) {
        if (
          this.validateForm.value.userName === user[i] &&
          this.validateForm.value.password === password
        ) {
          this.name = this.validateForm.value.userName;
          this.goTo(this.validateForm.value.userName);
          return;
        }
      }
      this.message.error('Sai thông tin đăng nhập');
    }
  }

  goTo(i: any) {
    if (i !== 'admin') {
      this.router.navigate(['/layout'], { state: { name: this.name } });
    } else this.router.navigate(['/admin']);
  }

  forgotPass() {
    this.message.warning('Vui lòng liên hệ phòng đào tạo để cấp lại mật khẩu');
  }

  ngOnInit() {}
}
