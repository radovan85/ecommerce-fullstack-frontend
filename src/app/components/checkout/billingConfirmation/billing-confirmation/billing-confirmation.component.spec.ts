import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingConfirmationComponent } from './billing-confirmation.component';

describe('BillingConfirmationComponent', () => {
  let component: BillingConfirmationComponent;
  let fixture: ComponentFixture<BillingConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
