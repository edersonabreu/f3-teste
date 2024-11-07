import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/componentes/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(event: Event): void {
    event.preventDefault();
    this.dialog.open(CustomDialogComponent, {
      width: '400px',    
      height: '300px',  
      data: {            
        titulo: 'Senha redefinida com sucesso!',
        icone: 'check',
        subtitulo: 'Enviamos um e-mail com mais informações sobre, não esqueça de conferir também em sua caixa de spam.'
      }
    });
  }


}
