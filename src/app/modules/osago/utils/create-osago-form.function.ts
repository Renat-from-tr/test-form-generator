/**
 * Фабрика для создания формы PolicyForm
 */
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createPersonForm } from '../../../_common/forms/person-form/utils';
import { createVehicleForm } from '../../../_common/forms/vehicle-form/utils';
import { createDocumentForm } from '../../../_common/forms/document-form/utils';
import { OsagoFormGroup } from '../models';
import { createContactsForm } from '../../../_common/forms/contacts-form/utils';

/**
 * Создаёт типизированную форму для осаго
 */
export function createOsagoForm(): OsagoFormGroup {
  return new FormGroup({
    insuredPerson: createPersonForm(),
    owner: createPersonForm(),
    vehicle: createVehicleForm(),
    contactData: createContactsForm(),
    identityDocument: createDocumentForm(),
    isIndividualEntrepreneur: new FormControl(false),
    inn: new FormControl(
      { value: null, disabled: true },
      {
        validators: [
          Validators.required,
          Validators.pattern(/^\d{10}$/)
        ]
      }
    ),
    hasSNILS: new FormControl(false),
    SNILS: new FormControl(
      { value: null, disabled: true },
      {
        validators: [
          Validators.required,
          Validators.pattern(/^\d{11}$/)
        ]
      }
    ),
    isOwnerDriver: new FormControl(false),
    comment: new FormControl(null),
  });
}
