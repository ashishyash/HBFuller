import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DrawerModule } from 'primeng/drawer';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TimelineModule } from 'primeng/timeline';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule, DrawerModule, SelectButtonModule, FormsModule,
    BadgeModule ,OverlayBadgeModule, CommonModule, TimelineModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  visible2: boolean = false;
  stateOptions: any[] = [{ label: 'Notifications', value: 'notifications' }, { label: 'Trainiing Links', value: 'trainiingLinks' }];

  value: string = 'notifications';
  news = [{
    time: '03:00', title: 'Flip Mobile Access Link', description: 'following the recent enforcement of VPN access, some users reported experiencing difficulties accessing flip on mobile devices.',
    link: '#'
  },
  {
    time: '03:00', title: 'Flip Mobile Access Link', description: 'following the recent enforcement of VPN access, some users reported experiencing difficulties accessing flip on mobile devices.',
    link: '#'
  },{}
  ]
  actionItems = [{ id: 'HV-121', description: 'Review Quotation', date: '24 June', link: '#' },
  { id: 'HV-120', description: 'Approval Pending', date: '21 June', link: '#' }
  ]
}
