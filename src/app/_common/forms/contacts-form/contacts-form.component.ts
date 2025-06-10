import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContactsFormGroup } from './models/contacts-form-group.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'i-contacts-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './contacts-form.component.html'
})
export class ContactsFormComponent {
  /** Форма контактных данных */
  @Input() form!: ContactsFormGroup;
}
