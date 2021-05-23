import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealcardComponent } from './mealcard.component';

describe('MealcardComponent', () => {
  let component: MealcardComponent;
  let fixture: ComponentFixture<MealcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
