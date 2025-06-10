import { FormControl, FormGroup } from "@angular/forms";

/** Информация о транспортном средстве */
export type VehicleFormGroup = FormGroup<{
  /** Марка и модель автомобиля, включая год выпуска */
  makeModel: FormControl<string | null>

  /** Мощность двигателя в лошадиных силах */
  horsepower: FormControl<string | null>

  /** Государственный регистрационный номер (госномер) */
  registrationNumber: FormControl<string | null>

  /** VIN-номер автомобиля */
  vin: FormControl<string | null>

  /** Номер СТС (свидетельства о регистрации ТС) */
  stsNumber: FormControl<string | null>

  /** Дата выдачи СТС */
  stsIssueDate: FormControl<Date | null>
}>