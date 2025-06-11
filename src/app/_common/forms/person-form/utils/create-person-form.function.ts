import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { PersonFormGroup } from '../models';

/**
 * Создает типизированную форму для персональных данных
 * @returns Форма с контролами для персональных данных
 */
export function createPersonForm(): PersonFormGroup {
  return new FormGroup({
    fullName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    birthDate: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
  });
}
