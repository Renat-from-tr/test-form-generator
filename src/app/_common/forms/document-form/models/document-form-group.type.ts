import { FormGroup, FormControl } from '@angular/forms';

/** Тип документа */
export type DocumentType = 'passport' | 'licenceDriver';

export const DOCUMENT_TYPE_OPTIONS: { value: DocumentType; name: string }[] = [
  { value: 'passport', name: 'Паспорт' },
  { value: 'licenceDriver', name: 'Водительское удостоверение' },
];

/** Типизированная форма для документа удостоверяющий личность */
export type IdentityDocumentFormGroup = FormGroup<{
  /** Тип документа */
  type: FormControl<DocumentType | null>;

  /** Серия и номер */
  seriesNumber: FormControl<string | null>;
  
  /** Дата выдачи */
  issueDate: FormControl<Date | null>;
}>;
