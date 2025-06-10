import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PersonFormGroup } from './models';
import { MatRadioModule } from '@angular/material/radio';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RequiredValidatorDirective } from '../../directives/required/required.directive';


@Component({
  selector: 'i-person-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, RequiredValidatorDirective],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class PersonFormComponent {
  /** Форма  */
  @Input() form!: PersonFormGroup;

  /** Максимальная дата рождения */
  @Input() maxBirthdate = new Date();

  readonly minBirthdate = new Date();

  constructor() {
    this.minBirthdate.setFullYear(new Date().getFullYear() - 100);
  }
}
