// vehicle-form/utils/create-vehicle-form-form.function.ts
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleFormGroup } from '../models';

/**
 * Создает форму для данных о транспортном средстве
 */
export function createVehicleForm(): VehicleFormGroup {
  return new FormGroup({
    makeModel: new FormControl(null, [Validators.required]),
    horsepower: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(2000)
    ]),
    registrationNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/iu)
    ]),
    vin: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{10,12}$/)
    ]),
    stsNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{2}[А-Я]{2}\d{6}$/iu)
    ]),
    stsIssueDate: new FormControl(null, [Validators.required]),
  });
}