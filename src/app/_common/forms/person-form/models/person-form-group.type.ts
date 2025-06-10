import { FormGroup, FormControl } from '@angular/forms';

/** Типизированная форма для Person */
export type PersonFormGroup = FormGroup<{
  /** Полное имя (ФИО) */
  fullName: FormControl<string | null>;
  /** Дата рождения */
  birthDate: FormControl<Date | null>;
  /** Пол */
  gender: FormControl<'male' | 'female' | null>;
  /** Адрес регистрации */
  address: FormControl<string | null>;
}>;
