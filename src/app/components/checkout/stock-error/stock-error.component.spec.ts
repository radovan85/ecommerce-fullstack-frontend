import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockErrorComponent } from './stock-error.component';

describe('StockErrorComponent', () => {
  let component: StockErrorComponent;
  let fixture: ComponentFixture<StockErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
