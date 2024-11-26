import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject} from '@angular/core'; // Importar isPlatformBrowser
import { PLATFORM_ID } from '@angular/core'; // Importar PLATFORM_ID para determinar la plataforma
import { isPlatformBrowser } from '@angular/common';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID); // Inyectar el identificador de la plataforma

  // Verificar si estamos en el navegador
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('access_token');
    
    if (token) {
      return true; // El usuario tiene un token, puede acceder
    } else {
      router.navigate(['/landing']); // Redirigir a la página de landing
      return false; // Bloquear el acceso a la ruta
    }
  } else {
    // Si no estamos en el navegador (probablemente en SSR), puedes devolver `true` o hacer otra cosa
    return true;
  }
};
