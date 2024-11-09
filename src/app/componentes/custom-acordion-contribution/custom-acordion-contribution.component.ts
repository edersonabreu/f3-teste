import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomContributionDialogComponent } from '../custom-contribution-dialog/custom-contribution-dialog.component';

export interface AccordionItem {
  titulo: string;
  valor: string;
  porcentagem: number;
}

@Component({
  selector: 'app-custom-acordion-contribution',
  templateUrl: './custom-acordion-contribution.component.html',
  styleUrls: ['./custom-acordion-contribution.component.less']
})
export class CustomAcordionContributionComponent implements OnInit {
  @Input() items: AccordionItem[] = [];
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openEditModal(item: any) {
    const dialogRef = this.dialog.open(CustomContributionDialogComponent, {
      width: '400px', 
      data: { titulo_modal: 'Alterar Contribuição', titulo: item.titulo, valor: item.valor, porcentagem: item.porcentagem } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.items.findIndex(i => i.titulo === result.titulo);
        if (index !== -1) {
          this.items[index] = result;
        }
      }
    });
  }

}
