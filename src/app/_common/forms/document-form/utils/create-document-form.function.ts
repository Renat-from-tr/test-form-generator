import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DocumentFormGroup } from "../models/document-form-group.type";

/** Функция создания формы документа */
export function createDocumentForm(): DocumentFormGroup {
    return new FormGroup({
        type: new FormControl<'passport' | 'driverLicense'>('passport', Validators.required), 
        seriesNumber: new FormControl(null, Validators.required),
        issueDate: new FormControl(null, Validators.required)
    })
}