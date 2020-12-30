// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { Store } from '@ngrx/store';
// import { Router } from '@angular/router';

// import { HeaderComponent } from './header.component';
// import { HeaderState } from "../../states/header.state";
// import { INITHEADERSTATE } from '../../consts/header.const';
// import { menuClick, subMenuClick } from "../../actions/header.action";

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;
//   let initialState = { header: INITHEADERSTATE };
//   let mockStore: MockStore;
//   let newComponent;
//   let routerSpy;
//   let storeSpy;
  
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         { provide: Router, useValue: routerSpy },
//         provideMockStore({ initialState })
//       ],
//       declarations: [ HeaderComponent ]
//     })
//     .compileComponents();

//     mockStore = TestBed.inject(MockStore);
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   beforeEach(() => {
//     routerSpy = jasmine.createSpyObj('Router', ['navigate']);
//     storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
//     newComponent = new HeaderComponent(routerSpy, storeSpy); 
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have a logo', () => {
//     expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
//   });

//   it('should have a logout button', () => {
//     expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
//   });

//   it('logout button should say logout or signout', () => {
//     expect(fixture.nativeElement.querySelector('button').textContent.toLowerCase()).toEqual('sign out');
//   });

//   it('HeaderComponent ngOnInit should call state.select twice', () => {  
//     newComponent.ngOnInit();
//     expect(storeSpy.select).toHaveBeenCalledTimes(2);
//   });


//   for (let i = 0; i < INITHEADERSTATE.menuList.length; i++) {

//     let name = INITHEADERSTATE.menuList[i].name;
//     let routerLink = INITHEADERSTATE.menuList[i].routerLink;

//     it(`main menu has a ${name} menu item`, () => {
//       let query = `#menu > li:nth-child(${i+1}) > p`;
//       let menuTextWithoutSpaces = fixture.nativeElement.querySelector(query).textContent.replace(/\s/g, '');
//       expect(menuTextWithoutSpaces).toEqual(name);
//     });
    
//     it(`onMenuClick(${name},${routerLink}) calls store.dispatch function to send menuClick(${name}) action`, () => {
//       newComponent.onMenuClick(name, routerLink);
//       expect(storeSpy.dispatch).toHaveBeenCalledWith(menuClick({ name }));
//     })

//     it(`onMenuClick(${name},${routerLink}) does not call router.navigate`, () => {
//       component.onMenuClick(name, routerLink);
//       expect(routerSpy.navigate).toHaveBeenCalledTimes(0);
//     })
  
//   }

// });
