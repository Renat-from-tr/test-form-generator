import { FormGroup, FormControl } from '@angular/forms';

/** Форма для контактных данных */
export type ContactsFormGroup = FormGroup<{
  /** Электронная почта */
  email: FormControl<string | null>;
  /** Номер телефона  */
  phone: FormControl<string | null>;
}>;
