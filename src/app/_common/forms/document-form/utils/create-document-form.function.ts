/**
 * Функция создания формы для паспортных данных (IdentityDocument)
 * @returns {IdentityDocumentFormGroup} Новая форма для IdentityDocument
 */
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IdentityDocumentFormGroup } from '../models';

export function createDocumentForm(): IdentityDocumentFormGroup {
  return new FormGroup({
    type: new FormControl(null, [Validators.required]),
    seriesNumber: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10,12}$/)]),
    issueDate: new FormControl(null, [Validators.required, Validators.max(new Date().getTime())]),
  });
}
