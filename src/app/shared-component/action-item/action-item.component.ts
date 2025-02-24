import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-action-item',
  imports: [BadgeModule, OverlayBadgeModule, CommonModule],
  templateUrl: './action-item.component.html',
  styleUrl: './action-item.component.scss'
})
export class ActionItemComponent {
  @Input() actionItemHeading = '';
  @Input() actionItems: { id: string, description: string, date: string, link: string }[] = [];
}
