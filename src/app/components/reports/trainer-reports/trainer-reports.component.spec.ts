import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerReportsComponent } from './trainer-reports.component';

describe('TrainerReportsComponent', () => {
  let component: TrainerReportsComponent;
  let fixture: ComponentFixture<TrainerReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
