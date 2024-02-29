import { GlobalModule } from './../global.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutes } from './layout.routing';

@NgModule({
  imports: [CommonModule, LayoutRoutes, GlobalModule],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
