import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentFormGroup } from '../models';

/** 
 * Создает форму для паспортных данных
 */
export function createDocumentForm(): DocumentFormGroup {
  return new FormGroup({
    type: new FormControl(null, Validators.required),
    seriesNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{10,12}$/)
    ]),
    issueDate: new FormControl(null, Validators.required)
  });
}