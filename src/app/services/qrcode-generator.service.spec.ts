import { TestBed } from '@angular/core/testing';

import { QrcodeGeneratorService } from './qrcode-generator.service';

describe('QrcodeGeneratorService', () => {
  let service: QrcodeGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrcodeGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
