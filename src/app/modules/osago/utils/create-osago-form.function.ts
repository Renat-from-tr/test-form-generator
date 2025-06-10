import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OsagoFormGroup } from "../models";
import { createPersonForm } from "../../../_common/forms/person-form/utils";
import { createContactsForm } from "../../../_common/forms/contacts-form/utils/create-contacts-form.function";
import { createDocumentForm } from "../../../_common/forms/document-form/utils/create-document-form.function";
import { createVehicleForm } from "../../../_common/forms/vehicle-form/utils/create-vehicle-form.function";

/** Функция создания общей формы */
export function createOsagoForm(): OsagoFormGroup {
    return new FormGroup({
        insuredPerson: createPersonForm(),
        owner: createPersonForm(),
        contactData: createContactsForm(),
        identityDocument: createDocumentForm(),
        vehicle: createVehicleForm(),
        isIndividualEntrepreneur: new FormControl<boolean>(false),
        inn: new FormControl<string>({value: null, disabled: true}, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
        hasSNILS: new FormControl(false),
        snils: new FormControl<string>({value: null, disabled: true}, [Validators.required, Validators.pattern(/^[0-9]{11}$/)]),
        isOwnerDriver: new FormControl(false),
        comment: new FormControl(null)
    })
}