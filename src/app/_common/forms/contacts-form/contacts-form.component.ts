// contacts-form/contacts-form.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactsFormGroup } from './models';

@Component({
  selector: 'i-contacts-form',
  standalone: true,
  templateUrl: './contacts-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ContactsFormComponent {
  /** 
   * Родительская форма контактных данных 
   */
  @Input() form!: ContactsFormGroup;
}