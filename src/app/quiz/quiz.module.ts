import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [QuizComponent],
})
export class QuizModule {}
