import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Student } from 'src/app/models/datastudents.model';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {

  datastudents: Student[] = [
    new Student(100,'María','López','98500622','mlopez@gmail.com'),
    new Student(200,'Manuel','Hernández','98485479','mhernandez@gmail.com'),
    new Student(300,'Javier','Toro','97632565','jtoro@hotmail.com'),
    new Student(400,'Gonzalo','Vargas','96487845','gvargas@empresa.co'),
    new Student(500,'Jose','Aravena','98525855','jaravena@outlook.com'),
  ]

  displayedColumns = ['id','firstName','lastName','telephone','email','edit','delete']
 
  constructor(private readonly dialogService: MatDialog){}

  addStudent() {
    
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value){
        const lastId = this.datastudents[this.datastudents.length - 1]?.id;        
        this.datastudents = [...this.datastudents, new Student(lastId + 100, value.firstName, value.lastName,value.telephone,value.email)];
      }
    })

  }

  removeStudent(student: Student) {
    this.datastudents = this.datastudents.filter(
      (stu) => stu.id !== student.id 
    );
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.datastudents = this.datastudents.map((stu) => stu.id === student.id ? { ...stu, ...data } : stu)
      }
    })
  }
}
