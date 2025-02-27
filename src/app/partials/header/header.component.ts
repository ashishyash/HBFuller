import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { filter } from 'rxjs/internal/operators/filter';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-header',
  imports: [RouterModule, ToolbarModule, ButtonModule, IconFieldModule, InputIconModule, FormsModule, SelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: { name: string, value: string }[] = [];
  selectedItem: { name: string, value: string } = { name: 'USD', value: '$' };
  pageTitle: string = '';
  @Input() isSidebarActive: boolean = false;
  @Output() toggleSidebarVal = new EventEmitter<boolean>();
  
  constructor(private router: Router, private commonService: CommonService) {

  }

  ngOnInit() {
    this.items = [
      {
        name: 'USD',
        value: '$'
      },
      {
        name: 'EUR',
        value: '€'
      }
    ];
    this.getRouteData();
  }

  getRouteData() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((data) => {
      if (data.url === '/deal-manager') {
        this.pageTitle = 'Deal Manager';
      } else if (data.url === '/home') {
        this.pageTitle = 'Home';
      }
      else {
        this.pageTitle = 'Page Not Found';
      }
    });
  }

  updateCurrency() {
    this.commonService.setCurrency(this.selectedItem.value);
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
    this.toggleSidebarVal.emit(this.isSidebarActive);
  }
}
