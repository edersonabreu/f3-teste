import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-contribution',
  templateUrl: './monthly-contribution.component.html',
  styleUrls: ['./monthly-contribution.component.less']
})
export class MonthlyContributionComponent implements OnInit {

  contributions = [
    {
      value: 500, 
      percentage: 5
    },
    {
      value: 1000, 
      percentage: 10 
    },
    {
      value: 250, 
      percentage: 3 
    }
  ];

  allExpanded = true;

  constructor() { }

  ngOnInit(): void {
  }

}
