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

  it('should have a logo', () => {
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
  });

  it('should have a logout button', () => {
    expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
  });

  it('logout button should say logout or signout', () => {
    expect(fixture.nativeElement.querySelector('button').textContent.toLowerCase()).toEqual('sign out');
  });

  it('main menu has a reports menu item', () => {
    let query = 'header > div > li > p:nth-child(1)';
    expect(fixture.nativeElement.querySelector(query).textContent.toLowerCase()).toEqual('reports');
  });

  it('main menu has a reports menu item', () => {
    let query = 'header > div > li > p:nth-child(1)';
    expect(fixture.nativeElement.querySelector(query).textContent.toLowerCase()).toEqual('batches');
  });
  
  it('main menu has a reports menu item', () => {
    let query = 'header > div > li > p:nth-child(1)';
    expect(fixture.nativeElement.querySelector(query).textContent.toLowerCase()).toEqual('surveys');
  });

});
