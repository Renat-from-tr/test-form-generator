import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { PersonFormGroup } from './models';

@Component({
  selector: 'i-person-form',
  standalone: true,  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
  ],
  templateUrl: './person-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent {
  /** Типизированная форма для персональных данных */
  @Input({ required: true }) form!: PersonFormGroup;

  /** Максимальная дата рождения (18 лет назад от текущей даты) */
  @Input() maxBirthDate: Date = new Date();
}
