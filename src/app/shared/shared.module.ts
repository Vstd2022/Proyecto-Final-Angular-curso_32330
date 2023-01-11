import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { MyMaterialModule } from './modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsPageComponent } from '../pages/students-page/students-page.component';
import { RouterModule, Router } from '@angular/router';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';


@NgModule({
  declarations: [
    StudentDialogComponent,
    NavbarComponent,    
    SidebarComponent,
    PageWrapperComponent, 
    StudentsPageComponent, 
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    StudentDialogComponent,
    NavbarComponent,    
    SidebarComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    ToolbarComponent
  ]

})
export class SharedModule { }
