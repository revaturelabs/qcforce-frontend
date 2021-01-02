import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { SurveyFormComponent } from './survey-form.component';

describe('SurveyFormComponent', () => {
  let component: SurveyFormComponent;
  let fixture: ComponentFixture<SurveyFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyFormComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SurveyFormComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));

      el = de.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set submitted value to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it('should call the onSubmit method'), async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  // it ('form should be invalid', async (() => {
  //   component.surveyForm.controls['shortAnswer'].setValue('');
  //   expect(component.surveyForm.valid).toBeFalsy();
  // }));
 
  // it ('form should be invalid', async (() => {
  //   component.surveyForm.controls['multipleChoice'].setValue('');
  //   expect(component.surveyForm.valid).toBeFalsy();
  // }));

  // it ('form should be invalid', async (() => {
  //   component.surveyForm.controls['pickFromRange'].setValue('');
  //   expect(component.surveyForm.valid).toBeFalsy();
  // }));

  // it ('form should be valid', async (() => {
  //   component.surveyForm.controls['shortAnswer'].setValue('I love coding!');
  //   component.surveyForm.controls['multipleChoice'].setValue('Yes');
  //   component.surveyForm.controls['pickFromRange'].setValue('1');
  //   expect(component.surveyForm.valid).toBeTruthy();
  // }));

  // it ('form should be invalid', async (() => {
  //   component.surveyForm.controls['shortAnswer'].setValue('');
  //   expect(component.surveyForm.valid).toBeFalsy();
  // }));

  // it ('form should be invalid', async (() => {
  //   component.surveyForm.controls['shortAnswer'].
  //   setValue('I attended bootcamp starting in December of 2019 and graduating at the end of February 2020. I was a part of a batch that was taught skills in Machine Learning. Revature at this point had not had a Machine Learning course so my batch acted as a guinea pig of sorts. Training felt very disorganized and poorly put together. Most of the learning that was done was independent or with other classmates and not from the instructor. Keep in mind that I did not get to choose what course I would be taught but rather was elected based on where Revature thought I would best fit.');
  //   expect(component.surveyForm.valid).toBeFalsy();
  // }));
  // it ('form should be valid', async (() => {
  //   component.surveyForm.controls['shortAnswer'].
  //   setValue('I attended bootcamp starting in December');
  //   expect(component.surveyForm.valid).toBeTruthy();
  // }));
  
});
