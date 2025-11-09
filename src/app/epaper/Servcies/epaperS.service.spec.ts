import { TestBed } from '@angular/core/testing';
import { EpaperService } from './epaperS.service';
import { Observer } from 'rxjs';
import { Epaper } from '../../Model/EpaperModel.model';

describe('EpaperService', () => {
  let service: EpaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
