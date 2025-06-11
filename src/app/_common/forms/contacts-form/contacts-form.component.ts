import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactsFormGroup } from './models';

@Component({
  selector: 'i-contacts-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './contacts-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsFormComponent {
  /** Типизированная форма для контактных данных */
  @Input({ required: true }) form!: ContactsFormGroup;
}
