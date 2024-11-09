import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/componentes/custom-dialog/custom-dialog.component';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private dialog: MatDialog, 
    private fb: FormBuilder, 
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required]] 
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('chamou')

    if (this.form.valid) {
      this.modalService.openModal('Senha redefinida com sucesso!', 'check', 'Enviamos um e-mail com mais informações sobre, não esqueça de conferir também em sua caixa de spam.', 'green');
    }else{
      this.modalService.openModal('Ocorreu um erro!', 'close', 'Verifique se as informações digitadas estão corretas e tente novamente', 'red');
    }
  }


}
