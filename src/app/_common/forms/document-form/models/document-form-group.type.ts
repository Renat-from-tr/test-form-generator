import { FormControl, FormGroup } from '@angular/forms';

/** Типизированная форма для паспортных данных */
export type DocumentFormGroup = FormGroup<{
  /** Тип документа */
  type: FormControl<string | null>;

  /** Серия и номер */
  seriesNumber: FormControl<string | null>;

  /** Дата выдачи */
  issueDate: FormControl<Date | null>;
}>;
