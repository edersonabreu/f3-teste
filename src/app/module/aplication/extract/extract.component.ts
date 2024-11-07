import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  extrato: string;
  data: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { extrato: 'Extrato_00222122', data: '06/08/2010'},
  { extrato: 'Extrato_83232222', data: '12/02/2011'},
  { extrato: 'Extrato_93233343', data: '14/04/2014'},
  { extrato: 'Extrato_23555333', data: '16/04/2015'},
  { extrato: 'Extrato_23244444', data: '02/10/2016'},
  { extrato: 'Extrato_23324332', data: '09/03/2018'},
];

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.less'],
})
export class ExtractComponent implements OnInit {

  displayedColumns: string[] = ['extrato', 'data'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }


}
