import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ActionItemComponent } from '../action-item/action-item.component';
import { RestService } from '../../services/rest.service';
import { templateUrl } from '../../constant';

@Component({
  selector: 'app-drawer',
  imports: [
    DrawerModule,
    SelectButtonModule,
    FormsModule,
    ActionItemComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {

  @Input() visible: boolean = false;
  @Output() resetVisible = new EventEmitter<boolean>();

  stateOptions: any[] = [
    { label: 'My Campaign Action Items', value: 'myCampaignActionItems' }, { label: 'Notifications', value: 'notifications' }, { label: 'Training Links', value: 'trainingLinks' }];
  value: string = 'myCampaignActionItems';
  actionItemHeading: string = '';
  actionItems: { id: string, description: string, date: string, link: string }[] = [];
  notificationHeading: string = '';
  notificationActionItems: { id: string, description: string, date: string, link: string }[] = [];
  trainingHeading: string = '';
  trainingActionItems: { id: string, description: string, date: string, link: string }[] = [];

  constructor(private restService: RestService) {

  }
  ngOnInit() {
    this.getCampaignActionsData();
    this.getNotificationdata();
    this.getTrainingdata();
  }

  getCampaignActionsData() {
    this.restService.getApi(`${templateUrl.campaignActionItemsData}`).subscribe((data: any) => {
      this.actionItemHeading = data.actionItemHeading;
      this.actionItems = data.actionItems;
    });
  }
  getNotificationdata() {
    this.restService.getApi(`${templateUrl.notificationData}`).subscribe((data: any) => {
      this.notificationHeading = data.actionItemHeading;
      this.notificationActionItems = data.actionItems;
    });
  }
  getTrainingdata() {
    this.restService.getApi(`${templateUrl.trainingData}`).subscribe((data: any) => {
      this.trainingHeading = data.actionItemHeading;
      this.trainingActionItems = data.actionItems;
    });
  }
  resetVisibility(): void {
    this.visible = false;
    this.resetVisible.emit(this.visible);
  }
}
