import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ActionItemComponent } from '../action-item/action-item.component';

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

  stateOptions: any[] = [{ label: 'Notifications', value: 'notifications' }, { label: 'Trainiing Links', value: 'trainiingLinks' }];
  value: string = 'notifications';
  actionItemHeading = 'Total Items';
  actionItems = [{ id: 'HV-121', description: 'Review Quotation', date: '24 June', link: '#' },
  { id: 'HV-120', description: 'Approval Pending', date: '21 June', link: '#' }
  ];

  resetVisibility(): void {
    this.visible = false;
    this.resetVisible.emit(this.visible);
  }
}
