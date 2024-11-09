import { Component, inject, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { AccordionItem } from 'src/app/componentes/custom-acordion-contribution/custom-acordion-contribution.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomContributionDialogComponent } from 'src/app/componentes/custom-contribution-dialog/custom-contribution-dialog.component';

@Component({
  selector: 'app-monthly-contribution',
  templateUrl: './monthly-contribution.component.html',
  styleUrls: ['./monthly-contribution.component.less']
})
export class MonthlyContributionComponent implements OnInit {
    
  mockData: AccordionItem[] = [
    { titulo: 'Contribuição mensal', valor: 'R$ 224.76', porcentagem: 5 },
    { titulo: 'Contribuição voluntária', valor: 'R$ 556.70', porcentagem:  0},
  ];

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

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('graph');
    const myChart = echarts.init(chartDom!);

    const option = {
      title: [
        {
          text: 'Total em Contribuições',
          subtext: 'R$ 999.999,99',
          subtextStyle: {
            fontSize: 20,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600',
            color: '#464646'  
          },
          left: 'center',
          top: '0px',   
          textStyle: {
            fontSize: 14,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '400',
            color: '#464646' 
          }
        }
      ],
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
          radius: ['47%', '70%'],
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
                color: '#E22E6F'
              }
            },
            {
              value: 199999.99,
              name: 'Contribuição Voluntária',
              itemStyle: {
                color: '#594CBE'  
              }
            }
          ],
          top: '40px'
        }
      ]
    };

    myChart.setOption(option);
    myChart.resize();
  }

  // Método para abrir o modal
  openDialog(): void {
    const dialogRef = this.dialog.open(CustomContributionDialogComponent, {
      width: '400px',
      data: { titulo_modal: 'Incluir Contribuição' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mockData.push(result);
        console.log('A contribuição foi incluída:', result);
      } else {
        console.log('O diálogo foi fechado sem incluir dados.');
      }
    });
  }

}
