import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-answers',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.css']
})
export class ShortAnswerComponent implements OnInit {

  text = 'answers page';

  surveyForm: FormGroup;
  
  submittedAnswers = {
    shortAnswer: ''
  };

  submitted = false;

  constructor() {
    this.createForm();
  }
  ngOnInit(): void {
  }
  createForm(): void {
    this.surveyForm = new FormGroup({
    'shortAnswer' : new FormControl(this.submittedAnswers.shortAnswer, [
      Validators.required,
      Validators.maxLength(100)
    ]),
    })
  }
  onSubmit(): void {
    this.submitted = true;
  }

}
