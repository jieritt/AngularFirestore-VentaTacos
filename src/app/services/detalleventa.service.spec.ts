import { TestBed } from '@angular/core/testing';

import { DetalleventaService } from './detalleventa.service';

describe('DetalleventaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleventaService = TestBed.get(DetalleventaService);
    expect(service).toBeTruthy();
  });
});
