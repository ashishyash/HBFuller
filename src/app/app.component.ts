import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { SidebarComponent } from "./partials/sidebar/sidebar.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'HBFuller';
  isSidebarActive: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      this.isSidebarActive = screenWidth > 768 ? true : false;
      console.log(this.isSidebarActive, screenWidth);
    }
  }

}
