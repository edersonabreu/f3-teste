import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.less']
})
export class AplicationComponent implements OnInit {

  selectedLabel: string = 'Ver Extrato';

  isSidebarVisible = true;
  constructor(private sidebarService: SidebarService) {}


  ngOnInit() {
    // this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
    //   console.log(isVisible)
    //   this.isSidebarVisible = isVisible;
    // });
  }

  drawerOpened = true;

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }

  updateLabel(label: string): void {
    this.selectedLabel = label;
  }

}
