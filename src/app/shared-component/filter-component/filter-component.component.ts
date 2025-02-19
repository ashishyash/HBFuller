import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CustomersTableComponent } from '../customers-table/customers-table.component';

@Component({
  selector: 'app-filter-component',
  imports: [
    DropdownModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    CustomersTableComponent
  ],
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.scss'
})
export class FilterComponentComponent {
  filterForm: FormGroup;
  allCustomers = Array.from({ length: 50 }, (_, i) => ({
    group: `Customer Group unit ${i + 1} region ${i + 1}`,
    sales: `$${(Math.random() * 10000).toFixed(2)}`,
  }));
  customers = [...this.allCustomers];
  columns = [
    { field: 'group', header: 'Customer Group' },
    { field: 'sales', header: 'Total sales (12 Months)' }
  ]
  businessUnits = [
    { label: 'All Global Business Units', value: null },
    { label: 'Unit 1', value: 'unit 1' },
    { label: 'Unit 2', value: 'unit 2' },
  ];
  businessRegions = [
    { label: 'All Global Business Regions', value: null },
    { label: 'Region 1', value: 'region 1' },
    { label: 'Region 2', value: 'region 2' },
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      searchQuery: [''],
      businessUnit: [null],
      businessRegion: [null]
    });
    this.filterForm.valueChanges.subscribe(() => this.filterData());
  }

  filterData() {
    const { searchQuery, businessUnit, businessRegion } = this.filterForm.value;
    this.customers = this.allCustomers.filter(customer => {
      const matchesSearch = searchQuery
        ? customer.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.sales.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesBusinessUnit = businessUnit ? customer.group.includes(businessUnit) : true;
      const matchesBusinessRegion = businessRegion ? customer.group.includes(businessRegion) : true;
      return matchesSearch && matchesBusinessUnit && matchesBusinessRegion;
    });
  }

  resetFilters() {
    this.filterForm.reset({
      searchQuery: '',
      businessUnit: null,
      businessRegion: null
    });
  }

}
