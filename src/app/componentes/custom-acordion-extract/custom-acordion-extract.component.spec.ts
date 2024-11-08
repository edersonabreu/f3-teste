import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAcordionExtractComponent } from './custom-acordion-extract.component';

describe('CustomAcordionExtractComponent', () => {
  let component: CustomAcordionExtractComponent;
  let fixture: ComponentFixture<CustomAcordionExtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomAcordionExtractComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAcordionExtractComponent);
    component = fixture.componentInstance;
    component.items = 
      [
        { data: '06/11/2024', tipo: 'Pix', nome: 'Jurandir da Silva', valor: 224.76, banco: 'Banco do Brasil', info: 'Esta é uma informação adicional sobre a transferência realizada' },
        { data: '07/10/2024', tipo: 'DOC', nome: 'Neide Aparecida', banco: 'Nu Bank', valor: 556.70, info: 'Esta é uma informação adicional sobre a transferência realizada' }
      ];
    fixture.detectChanges();
  });

  it('deve  criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve verificar se há itens no objeto', () => {
    expect(component.items.length).toBeGreaterThan(0);
  });
});
