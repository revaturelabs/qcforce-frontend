import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavItemsComponent } from './subnav-items.component';

describe('SubnavItemsComponent', () => {
  let component: SubnavItemsComponent;
  let fixture: ComponentFixture<SubnavItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnavItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
