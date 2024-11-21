import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateTeacherDialogComponent } from '../update-teacher-dialog/update-teacher-dialog.component';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-teacher-settings',
  standalone: true,
  imports: [CommonModule,MatFormField,MatLabel,MatError,MatButtonModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './teacher-settings.component.html',
  styleUrls: ['./teacher-settings.component.scss']
})
export class TeacherSettingsComponent {
  teacherName = 'Juan Pérez';
  teacherEmail = 'juan.perez@ejemplo.com';
 
  addStudentForm: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.addStudentForm = this.fb.group({
      studentName: ['', [Validators.required]],
      studentId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }
 
  


  openUpdateTeacherModal() {
    this.dialog.open(UpdateTeacherDialogComponent, {
      width: '400px',
      data: { name: this.teacherName, email: this.teacherEmail },
    }).afterClosed().subscribe((updatedData) => {
      if (updatedData) {
        this.teacherName = updatedData.name;
        this.teacherEmail = updatedData.email;
       
      }
    });
  }

  addStudent() {
    if (this.addStudentForm.valid) {
      const student = this.addStudentForm.value;
      console.log('Nuevo estudiante registrado:', student);
      this.addStudentForm.reset();
    }
  }

  logout() {
    console.log('Cerrar sesión');
    // Lógica adicional para cerrar sesión
  }
}
