import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private modalService: ModalService,
    private router: Router
  ) { 
    this.initializeForm();
  }

  ngOnInit(): void {
  }

  private initializeForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]], 
      senha: ['', [Validators.required]]      
    });
  }

  onSubmit() {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.authService.login(formData.login, formData.senha).subscribe(
        (isLoggedIn: boolean) => {
          if (isLoggedIn) {
            this.router.navigate(['/aplication']);
          } else {
            this.modalService.openModal(
              'Usuário ou senha inválidos!',
              'close',
              'Verifique o usuário e senha digitados e tente novamente.',
              'red'
            );
          }
        },
        (error) => {
          console.error('Erro ao tentar fazer login', error);
        }
      );
    } else {
      this.modalService.openModal(
        'Ocorreu um erro!',
        'close',
        'Verifique o usuário e senha digitados e tente novamente.',
        'red'
      );
    }
  }


}
