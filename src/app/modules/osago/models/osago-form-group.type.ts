import { FormControl, FormGroup } from "@angular/forms";
import { PersonFormGroup } from "../../../_common/forms/person-form/models";
import { ContactsFormGroup } from "../../../_common/forms/contacts-form/models/contacts-form-group.type";
import { VehicleFormGroup } from "../../../_common/forms/vehicle-form/models";
import { DocumentFormGroup } from "../../../_common/forms/document-form/models/document-form-group.type";

/** Форма осаго (общая) */
export type OsagoFormGroup = FormGroup<{
    /** Страхователь (лицо, заключающее договор страхования) */
    insuredPerson: PersonFormGroup;

    /** Собственник транспортного средства */
    owner: PersonFormGroup;

    /** Информация о транспортном средстве */
    vehicle: VehicleFormGroup;

    /** Контактные данные */
    contactData: ContactsFormGroup;

    /** Документ, удостоверяющий личность */
    identityDocument: DocumentFormGroup;
    
    /** Признак, является ли ИП */
    isIndividualEntrepreneur: FormControl<boolean>;
    
    /** ИНН */
    inn: FormControl<string>;
    
    /** Признак наличия СНИЛС / инвалидности */
    hasSNILS: FormControl<boolean>;
    
    /** ИНН */
    snils: FormControl<string>;

    /** Является ли собственник также и водителем */
    isOwnerDriver: FormControl<boolean>;

    /** Дополнительный комментарий */
    comment: FormControl<string | null>;
}>