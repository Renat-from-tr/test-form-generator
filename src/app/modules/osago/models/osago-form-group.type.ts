import { FormGroup, FormControl } from '@angular/forms';
import { PersonFormGroup } from '../../../_common/forms/person-form/models';
import { VehicleFormGroup } from '../../../_common/forms/vehicle-form/models';
import { ContactsFormGroup } from '../../../_common/forms/contacts-form/models';
import { DocumentFormGroup } from '../../../_common/forms/document-form/models';

/** 
 * Типизированная форма для интерфейса OsagoForm.
 * Содержит данные о страхователе, собственнике, транспортном средстве и дополнительных признаках.
 */
export type OsagoFormGroup = FormGroup<{
  /** Данные страхователя */
  insuredPerson: PersonFormGroup;

  /** Данные собственника */
  owner: PersonFormGroup;

  /** Информация о транспортном средстве */
  vehicle: VehicleFormGroup;

  /** Контактные данные */
  contactData: ContactsFormGroup;

  /** Паспортные данные */
  identityDocument: DocumentFormGroup;

  /** Признак ИП */
  isIndividualEntrepreneur: FormControl<boolean>;

  /** ИНН */
  inn: FormControl<string | null>;

  /** Признак наличия СНИЛС */
  hasSNILS: FormControl<boolean>;

  /** СНИЛС */
  snils: FormControl<string | null>;

  /** Признак собственника-водителя */
  isOwnerDriver: FormControl<boolean>;

  /** Комментарий */
  comment: FormControl<string | null>;
}>;