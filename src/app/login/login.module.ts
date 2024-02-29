import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { GlobalModule } from '../global.module';

@NgModule({
  imports: [CommonModule, LoginRoutes, GlobalModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
