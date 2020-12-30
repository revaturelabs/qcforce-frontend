import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  text = 'answers page';

  surveyForm: FormGroup;
  
  surveysubmission = {
    shortAnswer: ''
  };

  submitted = false;

  constructor() {
    this.createForm();
   }

   createForm(): void {
     this.surveyForm = new FormGroup({
      'shortAnswer' : new FormControl(this.surveysubmission.shortAnswer, [
        Validators.required,
        Validators.maxLength(100)
      ]),
     })
   }

  ngOnInit(): void {
  }

  onSumbmit(): void {
    this.submitted = true;
  }

}
