import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA }from '@angular/material/dialog';
import { Student } from 'src/app/models/datastudents.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [
  ]
})
export class StudentDialogComponent {
   firstNameControl = new FormControl('')
   lastNameControl = new FormControl('')
   telephoneControl = new FormControl('')
   emailControl = new FormControl('')
   studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    telephone: this.telephoneControl,
    email: this.emailControl
   })

   constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data : Student | null,
  ) {
    console.log(data);
    if (data){
      this.studentForm.patchValue(data)
    }
   
  }


   close() {
    this.dialogRef.close()
   }

}
