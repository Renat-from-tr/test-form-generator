import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonFormGroup } from '../models/person-form-group.type';

/** Создает форму персональных данных */
export function createPersonForm(): PersonFormGroup {
  return new FormGroup({
    fullName: new FormControl(null, Validators.required),
    birthDate: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required)
  });
}