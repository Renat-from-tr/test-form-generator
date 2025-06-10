import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonFormComponent } from '../../_common/forms/person-form/person-form.component';
import { VehicleFormComponent } from '../../_common/forms/vehicle-form/vehicle-form.component';
import { ContactsFormComponent } from '../../_common/forms/contacts-form/contacts-form.component';
import { DocumentFormComponent } from '../../_common/forms/document-form/document-form.component';
import { createOsagoForm } from './utils';
import { signal } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'i-osago-form',
  standalone: true,
  templateUrl: './osago-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    PersonFormComponent,
    VehicleFormComponent,
    ContactsFormComponent,
    DocumentFormComponent,
  ],
})
export class OsagoFormComponent implements OnInit {
  readonly form = createOsagoForm();
  /** Максимальная дата рождения (текущая дата минус 18 лет) */
  readonly maxBirthdate: Date = (() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 18);
    return d;
  })();

  /** Сигнал: собственник = страхователь */
  ownerIsInsurer = signal(false);

  ngOnInit(): void {
    this.form.controls.insuredPerson.valueChanges
      .pipe(filter(() => this.ownerIsInsurer()))
      .subscribe(val => this.form.controls.owner.patchValue(val, { emitEvent: false }));
      
    this.form.controls.isIndividualEntrepreneur.valueChanges
      .subscribe((isIE) => {
        const innCtrl = this.form.controls.inn;
        isIE
          ? innCtrl.enable({ emitEvent: false })
          : innCtrl.disable({ emitEvent: false });
      });
    this.form.controls.hasSNILS.valueChanges
      .subscribe((hasSnils) => {
        const snilsCtrl = this.form.controls.SNILS;
        hasSnils
          ? snilsCtrl.enable({ emitEvent: false })
          : snilsCtrl.disable({ emitEvent: false });
      });
  }

  onOwnerIsInsurerChange(checked: boolean): void {
    this.ownerIsInsurer.set(checked);
    checked
      ? this.form.controls.owner.patchValue(this.form.controls.insuredPerson.value, { emitEvent: false })
      : this.form.controls.owner.reset();
  }

  submit(): void {
    console.warn('OSAGO form:', this.form, this.form.status);
    this.form.markAllAsTouched();
  }
}
