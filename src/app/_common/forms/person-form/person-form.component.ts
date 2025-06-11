import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonFormGroup } from './models';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'i-person-form',
  standalone: true,
  templateUrl: './person-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers: [provideNativeDateAdapter()]
})
export class PersonFormComponent {
  /** Родительская форма */
  @Input() form!: PersonFormGroup;

  /** Максимальная дата рождения (по умолчанию: текущая дата) */
  @Input() maxBirthdate = new Date();
}