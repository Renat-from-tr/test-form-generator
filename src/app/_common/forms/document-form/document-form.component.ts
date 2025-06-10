import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { IdentityDocumentFormGroup, DOCUMENT_TYPE_OPTIONS } from './models';

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
    MatNativeDateModule,
    MatSelectModule,
  ],
})
export class DocumentFormComponent {
  /**
   * Типизированная форма паспортных данных
   */
  @Input({ required: true }) form!: IdentityDocumentFormGroup;

  /** Максимально допустимая дата для issueDate (сегодня) */
  readonly today: Date = new Date();

  readonly documentTypeOptions = DOCUMENT_TYPE_OPTIONS;
}
