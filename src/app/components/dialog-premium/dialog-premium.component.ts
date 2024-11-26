import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PremiumService } from '../../service/premium/premium.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-premium',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,MatDialogContent],
  templateUrl: './dialog-premium.component.html',
  styleUrls: ['./dialog-premium.component.scss']
})
export class DialogPremiumComponent {
  // Creamos el formulario reactivo
  paymentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogPremiumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private premiumService: PremiumService
  ) {
    // Inicializamos el formulario con los campos y sus validaciones
    this.paymentForm = new FormGroup({
      student_id: new FormControl(data.student_id, Validators.required),
      card_number: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{16}$/)  // Validación de 16 dígitos
      ]),
      card_expiry: new FormControl('', [
        Validators.required,
        this.validateExpiryDate  // Validación personalizada para la fecha de expiración
      ]),
      card_cvc: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{3}$/)  // Validación de CVC (3 dígitos)
      ]),
      amount: new FormControl(89, [Validators.required]),
    });
  }

  // Método para cerrar el diálogo
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Método para enviar el formulario
  submitPayment() {
    if (this.paymentForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente.',
        icon: 'error',
      });
      return;
    }

    const paymentData = {
      student_id: this.paymentForm.value.student_id,
      is_active: true,
    };

    this.premiumService.createPremium(paymentData).subscribe(
      (response) => {
        Swal.fire({
          title: '¡Pago realizado con éxito!',
          text: 'Tu pago se ha procesado correctamente.',
          icon: 'success',
        });
        this.dialogRef.close(); // Cierra el diálogo después de procesar el pago
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          title: 'Error',
          text: error.message || 'Hubo un problema al procesar tu pago.',
          icon: 'error',
        });
      }
    );
  }

  // Validación personalizada para la fecha de expiración
  validateExpiryDate(control: FormControl): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const [year, month] = control.value.split('-').map(Number);
    const expiryDate = new Date(year, month - 1); // Mes es de 0 a 11

    // Si la fecha de expiración es menor o igual a la fecha actual
    if (expiryDate < currentDate) {
      return { invalidExpiryDate: true };
    }
    return null;
  }
}
