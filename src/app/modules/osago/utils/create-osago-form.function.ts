// osago/utils/create-osago-form.function.ts
import { FormGroup, FormControl } from '@angular/forms';
import { OsagoFormGroup } from '../models/osago-form-group.type';
import { createPersonForm } from '../../../_common/forms/person-form/utils';
import { createVehicleForm } from '../../../_common/forms/vehicle-form/utils';
import { createContactsForm } from '../../../_common/forms/contacts-form/utils';
import { createDocumentForm } from '../../../_common/forms/document-form/utils';

/** 
 * Создает типизированную форму для OsagoForm.
 */
export function createOsagoForm(): OsagoFormGroup {
  return new FormGroup({
    insuredPerson: createPersonForm(),
    owner: createPersonForm(),
    vehicle: createVehicleForm(),
    contactData: createContactsForm(),
    identityDocument: createDocumentForm(),
    isIndividualEntrepreneur: new FormControl(false, { nonNullable: true }),
    hasSNILS: new FormControl(false, { nonNullable: true }),
    inn: new FormControl({ value: null, disabled: true }),
    snils: new FormControl({ value: null, disabled: true }),
    isOwnerDriver: new FormControl(false, { nonNullable: true }),
    comment: new FormControl(null)
  });
}