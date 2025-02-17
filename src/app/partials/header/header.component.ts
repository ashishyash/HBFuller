import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SplitButtonModule } from 'primeng/splitbutton';
@Component({
  selector: 'app-header',
  imports: [RouterModule, ToolbarModule, ButtonModule, IconFieldModule, InputIconModule, SplitButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      }
  ];
  }

}
