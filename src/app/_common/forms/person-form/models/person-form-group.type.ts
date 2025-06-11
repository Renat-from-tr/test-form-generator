import { FormControl, FormGroup } from '@angular/forms';

/** Типизированная форма для персональных данных */
export type PersonFormGroup = FormGroup<{
  /** Полное имя (ФИО) */
  fullName: FormControl<string | null>;

  /** Дата рождения (не младше 18 лет) */
  birthDate: FormControl<Date | null>;

  /** Пол */
  gender: FormControl<'male' | 'female' | null>;

  /** Адрес регистрации */
  address: FormControl<string | null>;
}>;
