import { Component } from '@angular/core';
import {  Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-update-teacher-dialog',
  standalone: true,
  imports: [CommonModule,MatError,MatLabel,MatFormField,ReactiveFormsModule],
  templateUrl: './update-teacher-dialog.component.html',
  styleUrl: './update-teacher-dialog.component.scss'
})
export class UpdateTeacherDialogComponent {
  updateTeacherForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateTeacherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; email: string; phone: string }
  ) {
    this.updateTeacherForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      phone: [data.phone, [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  updateTeacher() {
    if (this.updateTeacherForm.valid) {
      this.dialogRef.close(this.updateTeacherForm.value.name);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
