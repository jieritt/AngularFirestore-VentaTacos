import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaqueriaComponent } from './taqueria.component';

describe('TaqueriaComponent', () => {
  let component: TaqueriaComponent;
  let fixture: ComponentFixture<TaqueriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaqueriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaqueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
