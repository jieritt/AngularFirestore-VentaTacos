import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVentasComponent } from './form-ventas.component';

describe('FormVentasComponent', () => {
  let component: FormVentasComponent;
  let fixture: ComponentFixture<FormVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
