import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorGraphComponent } from './major-graph.component';

describe('MajorGraphComponent', () => {
  let component: MajorGraphComponent;
  let fixture: ComponentFixture<MajorGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
