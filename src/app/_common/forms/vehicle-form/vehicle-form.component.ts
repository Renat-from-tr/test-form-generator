import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { VehicleFormGroup } from './models';


@Component({
  selector: 'i-vehicle-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './vehicle-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleFormComponent {
  /**
   * Типизированная форма для данных о транспортном средстве
   */
  @Input() form!: VehicleFormGroup;
}
