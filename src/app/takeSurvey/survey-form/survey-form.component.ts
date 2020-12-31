import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  
  surveyForm: FormGroup;
  
  submittedAnswers = {
    shortAnswer: '',
    multipleChoice: '',
    pickRange:''

  };

  

  submitted = false;

  token !:String;

  constructor(private route: ActivatedRoute,
    private fb:FormBuilder) {
      //this.createForm();
    }

  ngOnInit(): void {
  
    this.surveyForm=this.fb.group({
      shortAnswer: ['',[ Validators.required, Validators.maxLength(100)]],
      multipleChoice:  ['',Validators.required],
      pickRange: ['',Validators.required]


    })
    this.surveyForm.valueChanges.subscribe(newVal=>console.log(newVal))

      // this.surveyForm = new FormGroup({
      // 'shortAnswer' : new FormControl(this.submittedAnswers.shortAnswer, [
      //   Validators.required,
      //   Validators.maxLength(100)
      // ]), 'multipleChoice' : new FormControl(this.submittedAnswers.multipleChoice,
      //   [Validators.required]),
      //   'pickRange' : new FormControl(this.submittedAnswers.pickRange,
      //     [Validators.required]),
      // })
    

    this.route.queryParams.subscribe(params => {
      //console.log(params);
      this.token=params["token"];
      console.log(this.token);
      })
  }
  
  onSubmit(): void {
    this.submitted = true;
  }
  
}