import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickFromRangeComponent } from './pick-from-range.component';

describe('PickFromRangeComponent', () => {
  let component: PickFromRangeComponent;
  let fixture: ComponentFixture<PickFromRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickFromRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickFromRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
