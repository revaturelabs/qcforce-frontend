import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Question } from "src/app/models/question.model";

@Component({
  selector: "app-question-response-multiple-choice",
  templateUrl: "./question-response-multiple-choice.component.html",
  styleUrls: ["./question-response-multiple-choice.component.css"],
})
export class QuestionResponseMultipleChoiceComponent implements OnInit {
  multipleChoiceForm: FormGroup;
  newQuestion: Question = {
    id: 1,
    createdOn: new Date(Date.now()),
    type: "MULTIPLE-CHOICE",
    version: 1,
    question: [],
  };
  constructor(private fb: FormBuilder) {}

  // Initializes form group
  ngOnInit() {
    this.multipleChoiceForm = this.fb.group({
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4: "",
    });
  }
  //getter for choices in multipChoiceForm formgroup
  get multipleChoiceForms() {
    return this.multipleChoiceForm.get("choices") as FormArray;
  }

  // Deletes existing choice from form group

  onSubmit() {}
}
