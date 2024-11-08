import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItem {
  iconUrl: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.less']
})
export class CustomSidenavComponent implements OnInit {

  @Output() labelSelected: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    {
      iconUrl: 'assets/images/icons/icon_extract_view.svg',
      label: 'Ver Extrato',
      route: 'extract'
    },
    {
      iconUrl: 'assets/images/icons/icon_contribution_month.svg',
      label: 'Contribuição Mensal',
      route: 'monthly-contribution'
    },
    {
      iconUrl: 'assets/images/icons/icon_bag_cash.svg',
      label: 'Contribuição Extra',
      route: 'extra-contribution'
    },
    {
      iconUrl: 'assets/images/icons/icon_document.svg',
      label: 'Documentos',
      route: 'documents'
    },
    {
      iconUrl: 'assets/images/icons/icon_taxation.svg',
      label: 'Regime de Tributação',
      route: 'taxation-regime'
    },
    {
      iconUrl: 'assets/images/icons/icon_request_benefit.svg',
      label: 'Solicitar Benefício',
      route: 'request-benefit'
    },
    {
      iconUrl: 'assets/images/icons/icon_extract.svg',
      label: 'Extrato Regressivo',
      route: 'regressive-extract'
    },
    {
      iconUrl: 'assets/images/icons/icon_info.svg',
      label: 'Informações',
      route: 'information'
    },
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  onRouteClick(label: string): void {
    this.labelSelected.emit(label);
  }

}
