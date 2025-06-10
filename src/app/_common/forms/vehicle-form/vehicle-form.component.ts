import { Component, Input } from '@angular/core';
import { VehicleFormGroup } from './models';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RequiredValidatorDirective } from '../../directives/required/required.directive';

@Component({
  selector: 'i-vehicle-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatDatepickerModule, RequiredValidatorDirective],
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.scss'
})
export class VehicleFormComponent {
  @Input() form!: VehicleFormGroup;
}
