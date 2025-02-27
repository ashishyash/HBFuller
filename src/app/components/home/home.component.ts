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
import { RestService } from '../../services/rest.service';
import { templateUrl } from '../../constant';
@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule, FormsModule,
    BadgeModule, OverlayBadgeModule, CommonModule, TimelineComponent, DrawerComponent, ActionItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  visible: boolean = false;
  actionItemHeading: string = '';
  actionItems: { id: string, description: string, date: string, link: string }[] = [];

  constructor(private restService: RestService) {

  }
  ngOnInit() {
    this.getCampaignActionsData();
  }

  getCampaignActionsData() {
    this.restService.getApi(`${templateUrl.campaignActionItemsData}`).subscribe((data: any) => {
      this.actionItemHeading = 'My Action Items';
      this.actionItems = data.actionItems;
    });
  }

  resetVisibility(): void {
    this.visible = !this.visible;

  }
}
