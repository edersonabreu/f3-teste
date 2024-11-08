import { Component, Input, OnInit } from '@angular/core';

export interface AccordionItem {
  titulo: string;
  valor: number;
  porcentagem: number;
}

@Component({
  selector: 'app-custom-acordion-contribution',
  templateUrl: './custom-acordion-contribution.component.html',
  styleUrls: ['./custom-acordion-contribution.component.less']
})
export class CustomAcordionContributionComponent implements OnInit {
  @Input() items: AccordionItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
