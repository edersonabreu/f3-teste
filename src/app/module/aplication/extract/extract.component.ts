import { Component, OnInit } from '@angular/core';
import { AccordionItem } from 'src/app/componentes/custom-acordion-extract/custom-acordion-extract.component';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.less'],
})
export class ExtractComponent implements OnInit {

  ngOnInit(): void {
  }
  
  mockData: AccordionItem[] = [
    { data: '06/11/2024', tipo: 'Pix', nome: 'Jurandir da Silva', valor: 224.76, banco: 'Banco do Brasil', info: 'Esta é uma informação adicional sobre a transferência realizada' },
    { data: '07/10/2024', tipo: 'DOC', nome: 'Neide Aparecida', banco: 'Nu Bank', valor: 556.70, info: 'Esta é uma informação adicional sobre a transferência realizada' },
    { data: '21/10/2024', tipo: 'TEF', nome: 'Otávio Oliveira', valor: 870.25, banco: 'Sicred', info: 'Esta é uma informação adicional sobre a transferência realizada' },
    { data: '08/09/2024', tipo: 'TED', nome: 'Renan Cardoso', banco: 'Caixa', valor: 214.85, info: 'Esta é uma informação adicional sobre a transferência realizada' }
  ];

}
