import { FormControl, FormGroup } from '@angular/forms';

/** Типизированная форма для контактных данных */
export type ContactsFormGroup = FormGroup<{
  /** Электронная почта */
  email: FormControl<string | null>;

  /** Номер телефона */
  phone: FormControl<string | null>;
}>;
