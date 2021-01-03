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
  newMultiChoiceQuestion: FormGroup; 
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    const questionTemplate = this.fb.group({
      newQuesion: this.fb.array([])
    })

  }
  
  addChoice(){
    const field = this.fb.group({
      questionPart: []
    })

    this.questionForms.push(field);
  }

  showChoiceMaker() {
    this.addChoiceClicked = !this.addChoiceClicked;
    //Add questionInput to completeQuestion
  }
  onInput(event: any) {
    this.questionInput = event.value;
  }

  get questionForms() {
    return this.newMultiChoiceQuestion.get('questions') as FormArray
  }

  deleteChoice(i) {
    this.questionForms.removeAt(i)
  }
}
