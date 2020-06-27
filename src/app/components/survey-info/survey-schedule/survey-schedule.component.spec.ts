import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyScheduleComponent } from './survey-schedule.component';

describe('SurveyScheduleComponent', () => {
  let component: SurveyScheduleComponent;
  let fixture: ComponentFixture<SurveyScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
