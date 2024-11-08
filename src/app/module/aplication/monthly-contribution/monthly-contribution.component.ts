import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

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
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('graph');
    const myChart = echarts.init(chartDom!);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: R$ {c} ({d}%)'
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'Contribuições',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'outside',
            formatter: '{b}: R$ {c}'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: [
            {
              value: 499999.99,
              name: 'Contribuição Mensal',
              itemStyle: {
                color: '#594CBE'  
              }
            },
            {
              value: 499999.99,
              name: 'Contribuição Voluntária',
              itemStyle: {
                color: '#E22E6F'
              }
            }
          ]
        }
      ]
    };

    myChart.setOption(option);
    myChart.resize();
  }

}
