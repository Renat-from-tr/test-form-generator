// document-form/document-form.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { DocumentFormGroup } from './models';
import { CommonModule } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'i-document-form',
  standalone: true,
  templateUrl: './document-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter()]
})
export class DocumentFormComponent {
  /** Форма паспортных данных */
  @Input() form!: DocumentFormGroup;

  /** Максимальная допустимая дата (по умолчанию - текущая дата) */
  @Input() maxDate: Date = new Date();

  documentTypes = [
    { value: 'passport', name: 'Паспорт' },
    { value: 'driver_license', name: 'Водительское удостоверение' }
  ];
}