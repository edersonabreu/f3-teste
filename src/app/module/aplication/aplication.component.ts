import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.less']
})
export class AplicationComponent implements OnInit {

  selectedLabel: string = 'Ver Extrato';
  drawerOpened = true;
  isSidebarVisible = true;
  constructor(
    private sidebarService: SidebarService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private resizeListener: any;
  isLoading: boolean = false;

  ngOnInit() {
    // this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
    //   console.log(isVisible)
    //   this.isSidebarVisible = isVisible;
    // });

    this.updateLabelBasedOnRoute();

    this.checkScreenSize();
    this.resizeListener = this.onResize.bind(this);
    window.addEventListener('resize', this.resizeListener);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLabelBasedOnRoute();

        if (window.innerWidth <= 768) {
          this.drawerOpened = false;
        }
      }
    });
  }

  updateLabelBasedOnRoute(): void {
    const routePath = this.route.snapshot.firstChild?.routeConfig?.path;

    if (routePath === 'extract') {
      this.selectedLabel = 'Ver Extrato';
    } else if (routePath === 'monthly-contribution') {
      this.selectedLabel = 'Contribuição Mensal';
    } else if (routePath === 'information') {
      this.selectedLabel = 'Informações';
    } else if (routePath === 'documents') {
      this.selectedLabel = 'Documentos';
    } else if (routePath === 'request-benefit') {
      this.selectedLabel = 'Solicitar Benefício';
    } else if (routePath === 'regressive-extract') {
      this.selectedLabel = 'Extrato Regressivo';
    } else if (routePath === 'extra-contribution') {
      this.selectedLabel = 'Contribuição Extra';
    } else if (routePath === 'taxation-regime') {
      this.selectedLabel = 'Regime de Tributação';
    }
  }

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }

  updateLabel(label: string): void {
    this.selectedLabel = label;
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.drawerOpened = false;
    } else {
      this.drawerOpened = true;
    }
  }

  onLoadingEvent(isLoading: boolean) {
    this.isLoading = isLoading;

    if (isLoading) {
      setTimeout(() => {
        this.isLoading = false; 
      }, 2000);
    }
  }

}
