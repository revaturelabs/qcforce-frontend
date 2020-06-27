import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { HeaderState } from "../../states/header.state";
import { INITHEADERSTATE } from '../../consts/header.const';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let initialState = { header: INITHEADERSTATE }
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']); 
  let mockStore : MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy },
        provideMockStore({ initialState })
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
