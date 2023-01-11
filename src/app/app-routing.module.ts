import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagecontrolLayoutComponent } from './layouts/pagecontrol-layout/pagecontrol-layout.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';

const routes: Routes =  [
  {
    path: '',
    component: PagecontrolLayoutComponent,
    children:[
      {
      path:'students',
      component:StudentsPageComponent,
      },
      {
        path:'courses',
        component:CoursesPageComponent,
      }
  
  ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
