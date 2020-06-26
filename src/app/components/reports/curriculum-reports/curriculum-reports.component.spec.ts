import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumReportsComponent } from './curriculum-reports.component';

describe('CurriculumReportsComponent', () => {
  let component: CurriculumReportsComponent;
  let fixture: ComponentFixture<CurriculumReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
