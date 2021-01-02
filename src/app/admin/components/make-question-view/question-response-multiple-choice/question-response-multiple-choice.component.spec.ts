import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { QuestionResponseMultipleChoiceComponent } from "./question-response-multiple-choice.component";

describe("QuestionResponseMultipleChoiceComponent", () => {
  let component: QuestionResponseMultipleChoiceComponent;
  let fixture: ComponentFixture<QuestionResponseMultipleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionResponseMultipleChoiceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a radio button for multiple choice"),
    () => {
      expect(
        fixture.nativeElement.querySelector("#multipleChoice").toBeTruthy()
      );
    };

  it("should have a submit button"),
    () => {
      expect(fixture.nativeElement.querySelector("#submit").toBeTruthy());
    };

  it("should have textarea for question"),
    () => {
      expect(
        fixture.nativeElement.querySelector("#questionInput").toBeTruthy()
      );
    };

  it("should have valid input when submit button is clicked"),
    () => {
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css("#submitButton"));
      expect(button.nativeElement.disabled).toBeTruthy();
    };

  it("should enable button when textArea is not empty", () => {
    fixture.nativeElement.query("#inputQuestion").innerText =
      "I love this test";
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
});
