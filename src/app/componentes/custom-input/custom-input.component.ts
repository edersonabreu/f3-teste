import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.less']
})
export class CustomInputComponent implements OnInit {
@Input() titulo!:string;
@Input() type!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
