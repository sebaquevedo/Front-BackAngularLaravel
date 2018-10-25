import { TestBed, async, inject } from '@angular/core/testing';

import { Admin.GuardGuard } from './admin.guard';

describe('Admin.GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Admin.GuardGuard]
    });
  });

  it('should ...', inject([Admin.GuardGuard], (guard: Admin.GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
