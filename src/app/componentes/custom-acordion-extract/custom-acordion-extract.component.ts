import { Component, Input, OnInit } from '@angular/core';

export interface AccordionItem {
  data: string;
  tipo: string;
  nome: string; 
  valor: number;
  banco: string;
  info: string;
}

@Component({
  selector: 'app-custom-acordion-extract',
  templateUrl: './custom-acordion-extract.component.html',
  styleUrls: ['./custom-acordion-extract.component.less']
})
export class CustomAcordionExtractComponent implements OnInit {
  @Input() items: AccordionItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
