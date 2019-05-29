import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaqueriaComponent } from './form-taqueria.component';

describe('FormTaqueriaComponent', () => {
  let component: FormTaqueriaComponent;
  let fixture: ComponentFixture<FormTaqueriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTaqueriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTaqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
