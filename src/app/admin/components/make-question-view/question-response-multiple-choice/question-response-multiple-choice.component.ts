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
      choices: this.fb.array([]),
    });
  }
  //getter for choices in multipChoiceForm formgroup
  get multipleChoiceForms() {
    return this.multipleChoiceForm.get("choices") as FormArray;
  }

  // adds choice option to form group
  addChoice() {
    const choice = this.fb.group({
      answers: [],
    });
    this.newQuestion.question[0] = this.multipleChoiceForm
      .get("question")
      .value.toString();
    console.log(this.newQuestion.question[0]);

    this.multipleChoiceForms.push(choice);

    if ((<FormArray>this.multipleChoiceForm.get("choices")).length > 0) {
      for (
        let i = 0;
        i < (<FormArray>this.multipleChoiceForm.get("choices")).length;
        i++
      ) {
        this.newQuestion.question[i + 1] = this.multipleChoiceForm.get(
          "choices"
        )[i];
      }
      console.log(this.newQuestion.question);
    }
  }
  // Deletes existing choice from form group
  deleteChoice(i) {
    this.multipleChoiceForms.removeAt(i);
  }

  onSubmit() {}
}
