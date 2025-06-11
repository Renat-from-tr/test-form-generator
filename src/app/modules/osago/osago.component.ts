// osago/osago.component.ts
import { Component, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PersonFormComponent } from '../../_common/forms/person-form/person-form.component';
import { VehicleFormComponent } from '../../_common/forms/vehicle-form/vehicle-form.component';
import { ContactsFormComponent } from '../../_common/forms/contacts-form/contacts-form.component';
import { DocumentFormComponent } from '../../_common/forms/document-form/document-form.component';
import { createOsagoForm } from './utils/create-osago-form.function';
import { filter } from 'rxjs';
import { OsagoFormGroup } from './models/osago-form-group.type';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'i-osago',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PersonFormComponent,
    VehicleFormComponent,
    ContactsFormComponent,
    DocumentFormComponent,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './osago.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OsagoComponent {
  readonly form = createOsagoForm();
  readonly isOwnerInsurer = signal(false);
  readonly maxBirthDate = new Date();

  constructor() {
    this.maxBirthDate.setFullYear(new Date().getFullYear() - 18);

    effect(() => {
      if (this.isOwnerInsurer()) {
        this.form.controls.owner.patchValue(this.form.controls.insuredPerson.value);
      } else {
        this.form.controls.owner.reset();
      }
    });

    this.form.controls.insuredPerson.valueChanges
      .pipe(filter(() => this.isOwnerInsurer()))
      .subscribe(() => this.form.controls.owner.patchValue(this.form.controls.insuredPerson.value));

    this.form.controls.isIndividualEntrepreneur.valueChanges.subscribe(value => {
      value
        ? this.form.controls.inn.enable()
        : this.form.controls.inn.disable();
    });

    this.form.controls.hasSNILS.valueChanges.subscribe(value => {
      value
        ? this.form.controls.snils.enable()
        : this.form.controls.snils.disable();
    });
  }

  onOwnerIsInsurer(value: boolean): void {
    this.isOwnerInsurer.set(value);
    const { insuredPerson } = this.form.value;
    value 
      ? this.form.controls.owner.patchValue(insuredPerson)
      : this.form.controls.owner.reset();
  }

  submit(form: OsagoFormGroup): void {
    console.log('form: ', form.status, form);
  }
}