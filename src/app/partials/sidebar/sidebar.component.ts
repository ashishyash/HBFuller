import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { templateUrl } from '../../constant';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule, TooltipModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  mainMenu: any[] = [];
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getMainMenu();
  }

  getMainMenu() {
    this.restService.getApi(`${templateUrl.mainMenu}`).subscribe((data: any) => {
      this.mainMenu = data;
    });
  }
  
  trackByFn(index: number, item: any) {
    return item.link
  }
}
