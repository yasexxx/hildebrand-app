import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditCarouselComponent } from './form-edit-carousel.component';

describe('FormEditCarouselComponent', () => {
  let component: FormEditCarouselComponent;
  let fixture: ComponentFixture<FormEditCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
