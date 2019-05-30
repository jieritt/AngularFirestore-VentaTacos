import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaDetalleComponent } from './venta-detalle.component';

describe('VentaDetalleComponent', () => {
  let component: VentaDetalleComponent;
  let fixture: ComponentFixture<VentaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
