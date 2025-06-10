import { Component, OnInit, signal } from '@angular/core';
import { OsagoFormGroup } from './models';
import { PersonFormComponent } from '../../_common/forms/person-form/person-form.component';
import { ContactsFormComponent } from '../../_common/forms/contacts-form/contacts-form.component';
import { createOsagoForm } from './utils';
import { DocumentFormComponent } from '../../_common/forms/document-form/document-form.component';
import { VehicleFormComponent } from '../../_common/forms/vehicle-form/vehicle-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { filter } from 'rxjs';

const imports = [
  ReactiveFormsModule,
  PersonFormComponent,
  ContactsFormComponent,
  DocumentFormComponent,
  VehicleFormComponent,
  MatFormField,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
]

@Component({
  selector: 'i-osago',
  standalone: true,
  imports,
  templateUrl: './osago.component.html',
})
export class OsagoComponent implements OnInit {
  readonly form = createOsagoForm();
  readonly maxBirthdate = new Date();
  readonly ownerIsInsurer = signal(false);

  ngOnInit(): void {
    this.maxBirthdate.setFullYear(new Date().getFullYear() - 18);

    this.form.controls.insuredPerson.valueChanges
      .pipe(
        filter(() => this.ownerIsInsurer()))
      .subscribe(value => this.form.controls.owner.patchValue(value));
    
    this.form.controls.isIndividualEntrepreneur.valueChanges
      .subscribe(value => this.form.controls.inn[value ? 'enable' : 'disable']());

    this.form.controls.hasSNILS.valueChanges
      .subscribe(value => this.form.controls.snils[value ? 'enable' : 'disable']());
  }

  updateOwner(value: boolean): void {
    const { insuredPerson, owner } = this.form.controls;
    value 
      ? owner.patchValue(insuredPerson.value)
      : owner.reset();
    this.ownerIsInsurer.set(value);
  }

  submit(form: OsagoFormGroup): void {
    console.warn('SUBMITED: ', form);
    if (form.invalid) {
      return;
    }

  }
}
