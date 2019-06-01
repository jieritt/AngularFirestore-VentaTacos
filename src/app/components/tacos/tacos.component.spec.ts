import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacosComponent } from './tacos.component';

describe('TacosComponent', () => {
  let component: TacosComponent;
  let fixture: ComponentFixture<TacosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
