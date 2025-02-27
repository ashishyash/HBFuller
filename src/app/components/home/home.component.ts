import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { BadgeModule } from 'primeng/badge';
import { TimelineComponent } from '../../shared-component/timeline/timeline.component';
import { DrawerComponent } from '../../shared-component/drawer/drawer.component';
import { ActionItemComponent } from '../../shared-component/action-item/action-item.component';
@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule, FormsModule,
    BadgeModule, OverlayBadgeModule, CommonModule, TimelineComponent, DrawerComponent, ActionItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  visible: boolean = false;
  actionItems = [{ id: 'HV-121', description: 'Review Quotation', date: '24 June', link: '#' },
  { id: 'HV-120', description: 'Approval Pending', date: '21 June', link: '#' },
  { id: 'HV-121', description: 'Review Quotation', date: '24 June', link: '#' }
  ];
  actionItemHeading = 'My Action Items';

  resetVisibility(): void {
    this.visible = !this.visible;

  }
  
}
