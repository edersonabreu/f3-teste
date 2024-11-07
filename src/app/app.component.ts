import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  drawerOpened = true;

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }
}
