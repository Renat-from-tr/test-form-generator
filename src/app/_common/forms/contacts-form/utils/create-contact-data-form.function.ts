import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsFormGroup } from '../models';

/** Создает типизированную форму для контактных данных */
export function createContactDataForm(): ContactsFormGroup {
  return new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[78]\d{10}$/)
    ]),
  });
}
