import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-customers-table',
  imports: [TableModule, CommonModule],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.scss'
})
export class CustomersTableComponent {
  @Input() data: any[] = [];
  @Input() columns: { field: string, header: string }[] = [];
  @Input() showCustomerCount: boolean = true;
  @Input() showBorderColor: boolean = false;
}
