import { FormControl, FormGroup } from "@angular/forms";

/** Форма контактных данных */
export type ContactsFormGroup = FormGroup<{
    /** Электронная почта */
    email: FormControl<string | null>;

    /** Телефонв */
    phone: FormControl<string | null>;
}>;