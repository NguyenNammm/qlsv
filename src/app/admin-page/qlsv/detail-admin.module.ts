import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailAdminComponent } from './detail-admin.component';
import { GlobalModule } from '../../global.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: DetailAdminComponent }]),
  ],
  declarations: [DetailAdminComponent],
})
export class DetailAdminModule {}
