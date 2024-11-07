import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input-password',
  templateUrl: './custom-input-password.component.html',
  styleUrls: ['./custom-input-password.component.less']
})
export class CustomInputPasswordComponent implements OnInit {
  @Input() titulo!:string;
  @Input() tipo!:string;
  hide: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
