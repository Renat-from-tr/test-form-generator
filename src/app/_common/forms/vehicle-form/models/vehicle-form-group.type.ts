import { FormControl, FormGroup } from '@angular/forms';

/** 
 * Форма для данных о транспортном средстве
 */
export type VehicleFormGroup = FormGroup<{
  /** Марка, модель, год выпуска */
  makeModel: FormControl<string | null>;

  /** Мощность двигателя, л.с. */
  horsepower: FormControl<number | null>;

  /** Госномер ТС */
  registrationNumber: FormControl<string | null>;

  /** VIN-код */
  vin: FormControl<string | null>;

  /** Номер СТС */
  stsNumber: FormControl<string | null>;

  /** Дата выдачи СТС */
  stsIssueDate: FormControl<Date | null>;
}>;