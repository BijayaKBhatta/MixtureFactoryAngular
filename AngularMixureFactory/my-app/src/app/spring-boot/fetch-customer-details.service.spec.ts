import { TestBed, inject } from '@angular/core/testing';

import { FetchCustomerDetailsService } from './fetch-customer-details.service';

describe('FetchCustomerDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchCustomerDetailsService]
    });
  });

  it('should be created', inject([FetchCustomerDetailsService], (service: FetchCustomerDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
