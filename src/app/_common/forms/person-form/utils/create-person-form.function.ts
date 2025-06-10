
import { FormGroup, FormControl } from '@angular/forms';
import { PersonFormGroup } from '../models';
import { Validators } from '@angular/forms';

/** Функция создания формы для Person */
export function createPersonForm(): PersonFormGroup {
  return new FormGroup({
    fullName: new FormControl(null, Validators.required),
    birthDate: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
  });
}
