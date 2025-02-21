import { Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { FilterComponentComponent } from '../../shared-component/filter-component/filter-component.component';
import { CardModule } from 'primeng/card';
import { CustomersTableComponent } from '../../shared-component/customers-table/customers-table.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartComponent } from '../../shared-component/chart/chart.component';
import { RestService } from '../../services/rest.service';
import { templateUrl } from '../../constant';
import { SelectModule } from 'primeng/select';

interface Chart {
  labels: string[],
  datasets: {
    label: string,
    backgroundColor: string,
    borderColor: string,
    data: number[]
  }[]
}
interface ContributionType {
  name: string;
  value: string;
}
@Component({
  selector: 'app-deal-manager',
  imports: [
    FilterComponentComponent,
    CardModule,
    SelectButtonModule,
    FormsModule,
    BreadcrumbModule,
    CommonModule,
    RouterModule,
    ChartComponent,
    SelectModule 
  ],
  templateUrl: './deal-manager.component.html',
  styleUrl: './deal-manager.component.scss',
})
export class DealManagerComponent {
  platformId = inject(PLATFORM_ID);
  items: MenuItem[] | undefined;
  chartData: any;
  chartLabels: string[] = [];
  salesChartData: Chart = { labels: [], datasets: [] };
  contributionChartData: Chart = { labels: [], datasets: [] };
  contributionChartDataPercent: Chart = { labels: [], datasets: [] }
  salesColumn = [
    { field: 'sales', header: 'Sales $' },
    { field: 'sales1', header: 'All Cust' },
    { field: 'sales2', header: ' ACust' },
    { field: 'sales3', header: 'BCust' },
    { field: 'sales4', header: 'CCust' }
  ];

  stateOptions: any[] = [{ label: 'Customers', value: 'customers' }, { label: 'Quotations', value: 'quotations' }];

  value: string = 'customers';
  marginColumn = [...this.salesColumn];
  salesData = Array.from({ length: 4 }, (_, i) => ({
    sales: 'content',
    sales1: 'content',
    sales2: 'content',
    sales3: 'content',
    sales4: 'content'
  }));
  marginData = [...this.salesData];
  contributionTypeData: ContributionType[] = [];
  selectedContributionType:ContributionType = {name:'Contrubution Margin %',value:'%'};

  constructor(private restService: RestService) { }
  ngOnInit() {
    this.contributionTypeData = [{name: 'Contrubution Margin %', value: '%'}, {name: 'Contrubution Margin $', value: '$'}]
    this.items = [{ label: 'Deal-Manager', route: '/deal-manager' }, { label: 'Customers' }];
    this.getChartData();

  }
  getChartData() {
    this.restService.getApi(`${templateUrl.charData}`).subscribe((data: any) => {
      this.chartData = data;
      for (const key in this.chartData) {
        if (this.chartData.hasOwnProperty(key)) {
          // sales chart data 
          if (key.includes('sales') && this.chartData[key] && key !== 'salesRollup') {
            this.salesChartData.labels = Object.keys(this.chartData[key]);
            const data: number[] = Object.values(this.chartData[key]);
            const obj = {
              label: key.replace('sales', ''),
              backgroundColor: '',
              borderColor: '',
              data: data,
            }
            this.salesChartData.datasets.push(obj);
          }
          // contribution chart data doller
          if (key.includes('value') && this.chartData[key] && key !== 'valueRollup') {
            this.contributionChartData.labels = Object.keys(this.chartData[key]);
            const data: number[] = Object.values(this.chartData[key]);
            const obj = {
              label: key.replace('value', ''),
              backgroundColor: '',
              borderColor: '',
              data: data,
            }
            this.contributionChartData.datasets.push(obj);
          }
          // contribution chart data percent
          if (key.includes('percent') && this.chartData[key] && key !== 'percentRollup') {
            this.contributionChartDataPercent.labels = Object.keys(this.chartData[key]);
            const data: number[] = Object.values(this.chartData[key]);
            const obj = {
              label: key.replace('percent', ''),
              backgroundColor: '',
              borderColor: '',
              data: data,
            }
            this.contributionChartDataPercent.datasets.push(obj);
          }
        }
      }
    });
  }
}
