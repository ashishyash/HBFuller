import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
interface Chart {
  labels: string[],
  datasets: {
    label: string,
    backgroundColor: string,
    borderColor: string,
    data: number[]
  }[]
}
@Component({
  selector: 'app-chart',
  imports: [ChartModule, CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  platformId = inject(PLATFORM_ID);
  data: any;
  options: any;
  @Input() chartData: Chart = { labels: [], datasets: [] }
  constructor() {

  }
  ngOnInit() {
    this.initChart();
  }


  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
      this.chartData.datasets.forEach((item, index) => {
        item.backgroundColor = documentStyle.getPropertyValue(this.color(index));
        item.borderColor = documentStyle.getPropertyValue(this.color(index));
      });



      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
            borderColor: documentStyle.getPropertyValue('--p-gray-500'),
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 1.5,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              },
              callback: (val: number)=> this.chartData.labels[val] === 'total'? 'all' :  this.chartData.labels[val]
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary,
              callback: (val: number)=>  val >= 500000000 ? val/1000000000 + 'B' : val
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
    }
  }

  color(colorName: number): string {
    // return `--p-${colorName}-500`;
    switch (colorName) {
      case 0:
        return '--p-green-500';
      case 1:
        return '--p-blue-500';
      case 2:
        return '--p-orange-500';
      default:
        return '--p-cyan-500';
    }
  }

}
