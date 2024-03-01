import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { GlobalModule } from '../../../global.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
