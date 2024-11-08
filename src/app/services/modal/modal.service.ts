import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/componentes/custom-dialog/custom-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModal(titulo: string, icone: string, subtitulo: string, cor: string): void {
    this.dialog.open(CustomDialogComponent, {
      width: '400px',
      height: '300px',
      data: {
        titulo: titulo,
        icone: icone,
        subtitulo: subtitulo,
        cor: cor
      }
    });
  }
}
