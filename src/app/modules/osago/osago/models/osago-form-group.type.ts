import { FormControl, FormGroup } from '@angular/forms';
import { PersonFormGroup } from '../../../../_common/forms/person-form/models';
import { VehicleFormGroup } from '../../../../_common/forms/vehicle-form/models';
import { ContactsFormGroup } from '../../../../_common/forms/contacts-form/models';
import { DocumentFormGroup } from '../../../../_common/forms/document-form/models';

/**
 * Типизированная форма для основного интерфейса формы ОСАГО.
 * Содержит данные о страхователе, собственнике, транспортном средстве и дополнительных признаках.
 */
export type OsagoFormGroup = FormGroup<{
  /** Данные страхователя (тот, кто оформляет полис) */
  insuredPerson: PersonFormGroup;

  /** Данные собственника транспортного средства */
  owner: PersonFormGroup;

  /** Информация о транспортном средстве */
  vehicle: VehicleFormGroup;

  /** Контактные данные страхователя (телефон и email) */
  contactData: ContactsFormGroup;

  /** Паспортные данные страхователя */
  identityDocument: DocumentFormGroup;

  /** Признак: является ли страхователь индивидуальным предпринимателем */
  isIndividualEntrepreneur: FormControl<boolean>;

  /** ИНН индивидуального предпринимателя*/
  inn: FormControl<string | null>;

  /** Признак наличия СНИЛС или инвалидности */
  hasSNILS: FormControl<boolean>;

  /** СНИЛС (отображается при hasSNILS = true) */
  SNILS: FormControl<string | null>;

  /** Признак: является ли собственник одновременно и водителем */
  isOwnerDriver: FormControl<boolean>;

  /** Дополнительный комментарий к оформлению полиса */
  comment: FormControl<string | null>;
}>;
