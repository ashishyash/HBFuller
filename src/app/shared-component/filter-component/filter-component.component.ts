import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { CustomersTableComponent } from '../customers-table/customers-table.component';
import { RestService } from '../../services/rest.service';
import { templateUrl } from '../../constant';
import { debounceTime, filter } from 'rxjs';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-filter-component',
  imports: [
    SelectModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    CustomersTableComponent,
    TooltipModule
  ],
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.scss'
})
export class FilterComponentComponent {
  filterForm: FormGroup;
  allCustomers: { group: string, sales: number }[] = [];
  customers: { group: string, sales: number }[] = [];
  columns = [
    { field: 'group', header: 'Customer Group' },
    { field: 'sales', header: 'Total sales (12 Months)' }
  ]
  businessUnits: any[] = [];
  businessRegions: any[] = [];

  constructor(private fb: FormBuilder, private restService: RestService) {
    this.filterForm = this.fb.group({
      searchQuery: [''],
      businessUnit: [null],
      businessRegion: [null]
    });

  }
  
  ngOnInit() {
    this.getAllCustomers();
    this.getBusinessUnit();
    this.getBusinessRegion();
    this.filterForm.valueChanges
      .pipe(
        debounceTime(300), filter(({ searchQuery }) => searchQuery.length >= 3 || searchQuery.length === 0))
      .subscribe(() => this.filterData());
  }

  getAllCustomers() {
    this.restService.getApi(`${templateUrl.customerGroup}`).subscribe((data: any) => {
      data.forEach((element: any) => {
        this.allCustomers.push({ group: element.salesRankGroupName, sales: element.biSales })
      });
      this.customers = [...this.allCustomers];
    });
  }
  getBusinessUnit() {
    this.restService.getApi(`${templateUrl.businessUnit}`).subscribe((data: any) => {
      data.forEach((element: any) => {
        this.businessUnits.push({ label: element.operatingSegmentName, value: element })
      });
    });
  }
  getBusinessRegion() {
    this.restService.getApi(`${templateUrl.businessRegion}`).subscribe((data: any) => {
      data.forEach((element: any) => {
        this.businessRegions.push({ label: element.businessRegionName, value: element })
      });
    });
  }

  filterData() {
    const { searchQuery, businessUnit, businessRegion } = this.filterForm.value;
    this.customers = this.allCustomers.filter(customer => {
      const matchesSearch = searchQuery
        ? customer.group.toLowerCase().includes(searchQuery.toLowerCase())
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
