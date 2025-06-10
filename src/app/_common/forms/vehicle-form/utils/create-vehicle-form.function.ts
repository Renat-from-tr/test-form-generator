/** Функция создания формы для данных о транспортном средстве с валидаторами */
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleFormGroup } from '../models';

export function createVehicleForm(): VehicleFormGroup {
  return new FormGroup({
    makeModel: new FormControl(null, Validators.required),
    horsepower: new FormControl(null, [Validators.required, Validators.pattern('^\\d+$'), Validators.min(1)]),
    registrationNumber: new FormControl(null, Validators.required),
    vin: new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^[A-HJ-NPR-Z0-9]{17}$'),
      ]
    ),
    stsNumber: new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^[0-9]{2}[A-Z]{2}[0-9]{6}$'),
      ]
    ),
    stsIssueDate: new FormControl(null, Validators.required),
  });
}
