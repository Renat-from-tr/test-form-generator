import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleFormGroup } from '../models';

/**
 * Создает типизированную форму для данных о транспортном средстве
 */
export function createVehicleForm(): VehicleFormGroup {
  return new FormGroup({
    makeModel: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    horsepower: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(2000)
    ]),
    registrationNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/u)
    ]),
    vin: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-HJ-NPR-Z0-9]{17}$/i)
    ]),
    stsNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{2}[А-Я]{2}\d{6}$/u)
    ]),
    stsIssueDate: new FormControl(null, [
      Validators.required
    ])
  });
}
