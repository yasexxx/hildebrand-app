import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarouselComponent } from './form-carousel.component';

describe('FormCarouselComponent', () => {
  let component: FormCarouselComponent;
  let fixture: ComponentFixture<FormCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
