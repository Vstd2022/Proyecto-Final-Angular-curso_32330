import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagecontrolLayoutComponent } from './pagecontrol-layout/pagecontrol-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule  } from '@angular/router';


@NgModule({
  declarations: [
    PagecontrolLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    PagecontrolLayoutComponent
  ]
})
export class LayoutsModule { }
