import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions: any = [];
  myForm: FormGroup;
  showResults: boolean = false;
  answers: any = {};

  constructor(private quizService: QuizService, private form: FormBuilder) {
    this.myForm = form.group({});
  }

  ngOnInit(): void {
    this.getQuestions();
    this.showResults = false;
  }

  getQuestions() {
    this.quizService.getQuestions().subscribe((questions) => {
      this.questions = questions.results.map((q: any, i: number) => {
        q.options = [...q.incorrect_answers, q.correct_answer];

        this.myForm?.addControl(
          'answer' + i,
          this.form.control('', [Validators.required])
        );

        return q;
      });
    });
  }

  submitAnswers() {
    this.answers = this.myForm.value;
    this.showResults = true;
  }
}
