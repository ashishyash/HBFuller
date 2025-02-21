import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartComponent } from '../../shared-component/chart/chart.component';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, ChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
