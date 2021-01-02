import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-question-response-multiple-choice",
  templateUrl: "./question-response-multiple-choice.component.html",
  styleUrls: ["./question-response-multiple-choice.component.css"],
})
export class QuestionResponseMultipleChoiceComponent implements OnInit {
  addChoiceClicked = false;
  questionInput: string = "";
  completeQuestion = [];

  constructor() {}

  ngOnInit(): void {}

  showChoiceMaker() {
    this.addChoiceClicked = !this.addChoiceClicked;
    //Add questionInput to completeQuestion
  }
  onInput(questionInput: string) {
    this.questionInput = questionInput;
  }
}
