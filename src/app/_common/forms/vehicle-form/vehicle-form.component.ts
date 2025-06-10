import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { VehicleFormGroup } from './models';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'i-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class VehicleFormComponent {
  /** Форма транспортного средства */
  @Input({ required: true }) form!: VehicleFormGroup;

  /** Максимально допустимая дата для stsIssueDate (сегодня) */
  readonly today: Date = new Date();
}
