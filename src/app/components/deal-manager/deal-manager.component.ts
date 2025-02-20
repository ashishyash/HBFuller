import { Component } from '@angular/core';
import { FilterComponentComponent } from '../../shared-component/filter-component/filter-component.component';
import { CardModule } from 'primeng/card';
import { CustomersTableComponent } from '../../shared-component/customers-table/customers-table.component';
import { RestService } from '../../services/rest.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-deal-manager',
  imports: [
    FilterComponentComponent,
    CardModule,
    CustomersTableComponent,
    SelectButtonModule,
    FormsModule,
    BreadcrumbModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './deal-manager.component.html',
  styleUrl: './deal-manager.component.scss',
})
export class DealManagerComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

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

  constructor() { }
  ngOnInit() {
    this.items = [{ label: 'Deal-Manager', route: '/deal-manager' },{ label: 'Customers' }];
}
}
