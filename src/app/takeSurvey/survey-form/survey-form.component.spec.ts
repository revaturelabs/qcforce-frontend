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

  it ('form should be invalid', async (() => {
    component.surveyForm.controls['shortAnswer'].setValue('');
    expect(component.surveyForm.valid).toBeFalsy();
  }));
 
  it ('form should be invalid', async (() => {
    component.surveyForm.controls['multipleChoice'].setValue('');
    expect(component.surveyForm.valid).toBeFalsy();
  }));

  it ('form should be invalid', async (() => {
    component.surveyForm.controls['pickFromRange'].setValue('');
    expect(component.surveyForm.valid).toBeFalsy();
  }));

  it ('form should be valid', async (() => {
    component.surveyForm.controls['shortAnswer'].setValue('I love coding!');
    component.surveyForm.controls['multipleChoice'].setValue('Yes');
    component.surveyForm.controls['pickFromRange'].setValue('1');
    expect(component.surveyForm.valid).toBeTruthy();
  }));

 
  
});
