import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-information',
  templateUrl: './custom-information.component.html',
  styleUrls: ['./custom-information.component.less']
})
export class CustomInformationComponent implements OnInit {
  @Input() titulo!:string;
  @Input() icone!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
