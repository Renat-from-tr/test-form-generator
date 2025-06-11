import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsFormGroup } from '../models/contacts-form-group.type';

/**
 * Создает форму контактных данных
 */
export function createContactsForm(): ContactsFormGroup {
  return new FormGroup({
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/^[78]\d{10}$/)
    ])
  });
}