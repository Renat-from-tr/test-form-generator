import { FormGroup, FormControl } from '@angular/forms';
import type { ContactsFormGroup } from '../models';
import { Validators } from '@angular/forms';

/**
 * Фабрика создания формы для ContactData
 */
export function createContactsForm(): ContactsFormGroup {
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
