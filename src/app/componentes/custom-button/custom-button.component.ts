import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.less']
})
export class CustomButtonComponent implements OnInit {
  @Input() titulo!:string;
  @Input() tipo!:string;
  @Input() css!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
