import { FormControl, FormGroup } from "@angular/forms";

/** Форма данных о документе клиента */
export type DocumentFormGroup = FormGroup<{
    /** Тип документа (например, "Паспорт РФ") */
    type: FormControl<'passport' | 'driverLicense'>;

    /** Серия и номер документа */
    seriesNumber: FormControl<string | null>;

    /** Дата выдачи документа */
    issueDate: FormControl<Date | null>;
}>;