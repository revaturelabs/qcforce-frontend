import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionResponseShortAnswerComponent } from './question-response-short-answer.component';

describe('QuestionResponseShortAnswerComponent', () => {
  let component: QuestionResponseShortAnswerComponent;
  let fixture: ComponentFixture<QuestionResponseShortAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionResponseShortAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseShortAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
 it ('should have a textbox for short answer'), () =>{
  expect(fixture.nativeElement.querySelector('#shortAnswer').toBeTruthy());
} 
});
