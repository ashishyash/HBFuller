import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-timeline',
  imports: [TimelineModule, CardModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  news = [{
    time: '03:00', title: 'Flip Mobile Access Link', description: 'following the recent enforcement of VPN access, some users reported experiencing difficulties accessing flip on mobile devices.',
    link: '#'
  },
  {
    time: '03:00', title: 'Flip Mobile Access Link', description: 'following the recent enforcement of VPN access, some users reported experiencing difficulties accessing flip on mobile devices.',
    link: '#'
  }
  ];
}
