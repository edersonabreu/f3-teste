import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mockUser = { login: 'teste@navega.com', senha: '123' }; 

  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');  
  }

  login(login: string, senha: string): Observable<boolean> {
    if (login === this.mockUser.login && senha === this.mockUser.senha) {
      localStorage.setItem('authToken', 'mocked-auth-token'); 
      return of(true);
    } else {
      return of(false); 
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
