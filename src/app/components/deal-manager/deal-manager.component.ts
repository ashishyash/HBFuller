import { Component } from '@angular/core';
import { FilterComponentComponent } from '../../shared-component/filter-component/filter-component.component';
import { CardModule } from 'primeng/card';
import { CustomersTableComponent } from '../../shared-component/customers-table/customers-table.component';
@Component({
  selector: 'app-deal-manager',
  imports: [FilterComponentComponent, CardModule, CustomersTableComponent
  ],
  templateUrl: './deal-manager.component.html',
  styleUrl: './deal-manager.component.scss',
})
export class DealManagerComponent {
  salesColumn = [
    { field: 'sales', header: 'Sales $' },
    { field: 'sales1', header: 'All Cust' },
    { field: 'sales2', header: ' ACust' },
    { field: 'sales3', header: 'BCust' },
    { field: 'sales4', header: 'CCust' }
  ];
  marginColumn = [...this.salesColumn];
  salesData = Array.from({ length: 4 }, (_, i) => ({
    sales: 'content',
    sales1: 'content',
    sales2: 'content',
    sales3: 'content',
    sales4: 'content'
  }));
  marginData = [...this.salesData];
}
