import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DrawerModule } from 'primeng/drawer';
import { SelectButtonModule } from 'primeng/selectbutton';


@Component({
  selector: 'app-home',
  imports: [ButtonModule,CardModule,DrawerModule,SelectButtonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  visible2: boolean = false;
  stateOptions: any[] = [{ label: 'Notifications', value: 'notifications' }, { label: 'Trainiing Links', value: 'trainiingLinks' }];

  value: string = 'notifications';
  
}
