import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactsFormGroup } from "../models/contacts-form-group.type";

/** Функция создания формы контактных данных */
export function createContactsForm(): ContactsFormGroup {
    return new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required, Validators.minLength(11),Validators.minLength(10)])
    });
} 