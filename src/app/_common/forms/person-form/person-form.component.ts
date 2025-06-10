import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PersonFormGroup } from './models';

@Component({
  selector: 'i-person-form',
  standalone: true,
  templateUrl: './person-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
   ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
})
export class PersonFormComponent {
  /** Родительская типизированная форма */
  @Input({ required: true }) form!: PersonFormGroup;

  /** Максимальная дата рождения */
  @Input() maxBirthdate = new Date();
}
