import { Component, Input } from '@angular/core';
import { DocumentFormGroup } from './models/document-form-group.type';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RequiredValidatorDirective } from '../../directives/required/required.directive';

@Component({
  selector: 'i-document-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, RequiredValidatorDirective],
  providers: [provideNativeDateAdapter()],
  templateUrl: './document-form.component.html',
})
export class DocumentFormComponent {
  /** Форма документа */
  @Input() form!: DocumentFormGroup;

  /** Тип документа */
  @Input() documentTypes = [
    { name: 'Паспорт РФ', value: 'passport'},
    { name: 'Водительское удостоверение', value: 'driverLicense'},
  ];

  readonly maxDate = new Date();
}
