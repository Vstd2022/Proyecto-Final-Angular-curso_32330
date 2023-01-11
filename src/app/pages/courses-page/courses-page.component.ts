import { Component } from '@angular/core';
import { Course } from 'src/app/models/datacourses.model';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {

  datacourses: Course[] = [
    new Course(1000,'Ingenieria'),
    new Course(2000,'Arquitectura'),
    new Course(3000,'Medicina'),
    new Course(4000,'Informatica'),
    new Course(5000,'Odontologia'),
  ]

  displayedColumns = ['idCourse','NameCourse']

}
