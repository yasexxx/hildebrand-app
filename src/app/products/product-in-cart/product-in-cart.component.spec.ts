import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInCartComponent } from './product-in-cart.component';

describe('ProductInCartComponent', () => {
  let component: ProductInCartComponent;
  let fixture: ComponentFixture<ProductInCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
