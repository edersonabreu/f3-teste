import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-custom-contribution-dialog',
  templateUrl: './custom-contribution-dialog.component.html',
  styleUrls: ['./custom-contribution-dialog.component.less']
})
export class CustomContributionDialogComponent implements OnInit {
  contributionForm: FormGroup;
  valor: number = 0;
  titulo: string;
  mostrarPorcentagem: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<CustomContributionDialogComponent>, 
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalService: ModalService
  ) {
    this.titulo = data.titulo;

    this.contributionForm = this.fb.group({
      titulo: [data.titulo, Validators.required],
      valor: [data.valor, [Validators.required, Validators.min(0)]], 
      porcentagem: [data.porcentagem, [Validators.required, Validators.min(0), Validators.max(100)]] 
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.onTipoContribuicaoChange();
  }

  incluir() {
    if (this.contributionForm.invalid) {
      this.modalService.openModal(
        'Ocorreu um erro!',
        'close',
        'Verifique os dados inseridos e tente novamente.',
        'red'
      );
      return; 
    }

    if (this.contributionForm.value.titulo === 'Contribuição voluntária') {
      this.contributionForm.patchValue({ porcentagem: 0 });
    }

    if (this.contributionForm.valid) {
      const novaContribuicao = this.contributionForm.value;  
      this.dialogRef.close(novaContribuicao); 
    } else {
      this.contributionForm.markAllAsTouched(); 
    }
  }

  onTipoContribuicaoChange() {
    const tipo = this.contributionForm.value.titulo;
    if (tipo === 'Contribuição voluntária') {
      this.mostrarPorcentagem = false;
      this.contributionForm.patchValue({ porcentagem: 0 });
    } else {
      this.mostrarPorcentagem = true;
    }
  }

  formatCurrency(event: any): void {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    inputValue = inputValue.replace(/(\d)(\d{3})$/, '$1.$2');
    inputValue = 'R$ ' + inputValue;
    event.target.value = inputValue;
    this.valor = parseFloat(inputValue.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
  }

}
