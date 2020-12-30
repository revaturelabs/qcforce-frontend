import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyFormService {
  //TODO this is a temporary URL. Needs to be changed for deployment
  baseURL: string = "http://localhost:9090/";

  constructor(private http: HttpClient) { }


getSurveyForm(): Observable<SurveyForm[]> {
  return this.http.get<SurveyForm[]>(this.baseURL+"survey")
}

}
