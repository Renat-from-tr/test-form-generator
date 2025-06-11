import { FormControl, FormGroup } from '@angular/forms';

/** 
 * Форма для паспортных данных
 */
export type DocumentFormGroup = FormGroup<{
  /** Тип документа */
  type: FormControl<string | null>;
  /** Серия и номер (10–12 цифр) */
  seriesNumber: FormControl<string | null>;
  /** Дата выдачи */
  issueDate: FormControl<Date | null>;
}>;