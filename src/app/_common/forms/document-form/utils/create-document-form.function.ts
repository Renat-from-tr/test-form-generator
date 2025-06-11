import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentFormGroup } from '../models';

/**
 * Создает типизированную форму для паспортных данных
 * @returns Форма с контролами для паспортных данных
 */
export function createDocumentForm(): DocumentFormGroup {
  return new FormGroup({
    type: new FormControl(null, [Validators.required]),
    seriesNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]),
    issueDate: new FormControl(null, [Validators.required]),
  });
}
