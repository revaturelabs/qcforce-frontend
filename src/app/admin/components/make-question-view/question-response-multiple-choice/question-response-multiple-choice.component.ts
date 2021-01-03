import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-question-response-multiple-choice",
  templateUrl: "./question-response-multiple-choice.component.html",
  styleUrls: ["./question-response-multiple-choice.component.css"],
})
export class QuestionResponseMultipleChoiceComponent implements OnInit {
  addChoiceClicked = false;
  questionInput: string = "";
  completeQuestion = [];
  QuestionForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.QuestionForm = this.fb.group({
      questions: this.fb.array([
        {
          choices: this.fb.array([]),
        },
      ]),
    });
  }

  get choiceForms() {
    return this.QuestionForm.get("choices") as FormArray;
  }

  get questionForms() {
    return this.QuestionForm.get("questions") as FormArray;
  }

  addChoice() {
    const questionChoice = this.fb.group({
      choice: [],
    });

    this.questionForms.push(questionChoice);
  }

  addQuestion() {
    const questionInput = this.fb.group({
      question: [],
    });

    this.questionForms.push(questionInput);
  }

  showChoiceMaker() {
    this.addChoiceClicked = !this.addChoiceClicked;
    //Add questionInput to completeQuestion
  }
  onInput(event: any) {
    this.questionInput = event.value;
  }

  deleteChoice(i) {
    this.choiceForms.removeAt(i);
  }

  deleteQuestion(i) {
    this.questionForms.removeAt(i);
  }
}
