import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketProductsComponent } from './supermarket-products.component';

describe('SupermarketProductsComponent', () => {
  let component: SupermarketProductsComponent;
  let fixture: ComponentFixture<SupermarketProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
