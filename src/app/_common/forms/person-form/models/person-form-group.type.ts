import { FormControl, FormGroup } from "@angular/forms";

/** Форма персональных данных */
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