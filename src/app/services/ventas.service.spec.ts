import { TestBed } from '@angular/core/testing';

import { VentasService } from './ventas.service';

describe('VentasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentasService = TestBed.get(VentasService);
    expect(service).toBeTruthy();
  });
});
