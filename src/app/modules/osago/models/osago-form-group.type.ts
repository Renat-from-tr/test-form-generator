/**
 * Типизированная форма для PolicyForm.
 * Содержит контролы для всех полей PolicyForm.
 */
import { FormGroup, FormControl } from '@angular/forms';
import { PersonFormGroup } from '../../../_common/forms/person-form/models';
import { VehicleFormGroup } from '../../../_common/forms/vehicle-form/models';
import { ContactsFormGroup } from '../../../_common/forms/contacts-form/models';
import { IdentityDocumentFormGroup } from '../../../_common/forms/document-form/models';

/**
 * Типизированная форма для полиса осаго
 */
export type OsagoFormGroup = FormGroup<{
  /** Данные страхователя */
  insuredPerson: PersonFormGroup;

  /** Данные собственника */
  owner: PersonFormGroup;

  /** Информация о транспортном средстве */
  vehicle: VehicleFormGroup;

  /** Контактные данные страхователя */
  contactData: ContactsFormGroup;

  /** Паспортные данные страхователя */
  identityDocument: IdentityDocumentFormGroup;

  /** Признак: является ли страхователь ИП */
  isIndividualEntrepreneur: FormControl<boolean>;

  /** ИНН */
  inn: FormControl<string | null>;

  /** Признак наличия СНИЛС или инвалидности */
  hasSNILS: FormControl<boolean>;

  /** СНИЛС */
  SNILS: FormControl<string | null>;

  /** Признак: является ли собственник водителем */
  isOwnerDriver: FormControl<boolean>;

  /** Дополнительный комментарий */
  comment: FormControl<string | null>;
}>;
