import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OsagoFormGroup } from '../models';
import { createPersonForm } from '../../../../_common/forms/person-form/utils';
import { createVehicleForm } from '../../../../_common/forms/vehicle-form/utils';
import { createContactDataForm } from '../../../../_common/forms/contacts-form/utils';
import { createDocumentForm } from '../../../../_common/forms/document-form/utils';

/**
 * Создает типизированную форму для основного интерфейса формы ОСАГО
 * @returns Форма с контролами для данных ОСАГО
 */
export function createOsagoForm(): OsagoFormGroup {
  return new FormGroup({
    insuredPerson: createPersonForm(),
    owner: createPersonForm(),
    vehicle: createVehicleForm(),
    contactData: createContactDataForm(),
    identityDocument: createDocumentForm(),
    isIndividualEntrepreneur: new FormControl(false),
    inn: new FormControl({ value: null, disabled: true }, [
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]), 
    hasSNILS: new FormControl(false),
    SNILS: new FormControl({ value: null, disabled: true }, [
      Validators.required,
      Validators.pattern(/^\d{11}$/)
    ]),
    isOwnerDriver: new FormControl(false),
    comment: new FormControl(null),
  });
}
