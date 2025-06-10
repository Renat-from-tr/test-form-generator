import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactsFormGroup } from './models';

@Component({
  selector: 'i-contacts-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contacts-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsFormComponent {
  /**
   * Родительская типизированная форма
   */
  @Input() form!: ContactsFormGroup;
}
