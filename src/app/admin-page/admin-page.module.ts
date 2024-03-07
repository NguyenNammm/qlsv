import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { GlobalModule } from '../global.module';
import { RouterModule } from '@angular/router';
import { AdminPageRoutes } from './admin-page.routing';

@NgModule({
  imports: [CommonModule, GlobalModule, AdminPageRoutes],
  declarations: [AdminPageComponent],
})
export class AdminPageModule {}
