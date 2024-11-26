import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HomeStudemtComponent } from '../home-studemt/home-studemt.component';
import { LoginStudentService } from '../../service/loginStudent/login-student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-s',
  templateUrl: './header-s.component.html',
  styleUrl: './header-s.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    HomeStudemtComponent,
    CommonModule
  ]
})
export class HeaderSComponent {
  private breakpointObserver = inject(BreakpointObserver);
  constructor( private login: LoginStudentService, private router: Router,){
    
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    logout() {
      console.log('Cerrar sesión');
      this.login.logoutStudent(); // Usamos el método de LoginService para cerrar sesión
      this.router.navigate(['/landing']);
  
    }
}
