import { FormControl, FormGroup } from '@angular/forms';

/**
 * Форма контактных данных
 */
export type ContactsFormGroup = FormGroup<{
  /** Электронная почта */
  email: FormControl<string | null>;

  /** Номер телефона */
  phone: FormControl<string | null>;
}>;