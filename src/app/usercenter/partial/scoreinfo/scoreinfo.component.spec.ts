import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreinfoComponent } from './scoreinfo.component';

describe('ScoreinfoComponent', () => {
  let component: ScoreinfoComponent;
  let fixture: ComponentFixture<ScoreinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
