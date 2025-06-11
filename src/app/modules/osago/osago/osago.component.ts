import { ChangeDetectionStrategy, Component, signal, effect, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';
import { OsagoFormGroup } from './models';
import { createOsagoForm } from './utils';
import { PersonFormComponent } from '../../../_common/forms/person-form/person-form.component';
import { VehicleFormComponent } from '../../../_common/forms/vehicle-form/vehicle-form.component';
import { ContactsFormComponent } from '../../../_common/forms/contacts-form/contacts-form.component';
import { DocumentFormComponent } from '../../../_common/forms/document-form/document-form.component';

@Component({
  selector: 'i-osago',
  standalone: true, imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    PersonFormComponent,
    VehicleFormComponent,
    ContactsFormComponent,
    DocumentFormComponent,
  ],
  templateUrl: './osago.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsagoComponent implements OnDestroy {
  /** Типизированная форма для основного интерфейса формы ОСАГО */
  form: OsagoFormGroup = createOsagoForm();

  /** Сигнал для управления отображением формы собственника */
  ownerIsSameAsInsured = signal(false);

  /** Максимальная дата рождения (18 лет назад от текущей даты) */
  readonly maxBirthDate = new Date();
  /** Subject для отписки от подписок при уничтожении компонента */
  private readonly destroy$ = new Subject<void>();

  constructor() {
    this.maxBirthDate.setFullYear(new Date().getFullYear() - 18);
    
    // Эффект для копирования данных страхователя в собственника при активном сигнале
    effect(() => {
      if (this.ownerIsSameAsInsured()) {
        this.copyInsuredPersonToOwner();
      }
    });

    // Подписка на изменения isIndividualEntrepreneur
    this.form.controls.isIndividualEntrepreneur.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(isIndividualEntrepreneur => {
        if (isIndividualEntrepreneur) {
          this.form.controls.inn.enable();
        } else {
          this.form.controls.inn.disable();
          this.form.controls.inn.setValue(null);
        }
      });

    // Подписка на изменения hasSNILS
    this.form.controls.hasSNILS.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(hasSNILS => {
        if (hasSNILS) {
          this.form.controls.SNILS.enable();
        } else {
          this.form.controls.SNILS.disable();
          this.form.controls.SNILS.setValue(null);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private copyInsuredPersonToOwner(): void {
    const insuredValue = this.form.controls.insuredPerson.value;
    this.form.controls.owner.patchValue(insuredValue);
  }

  /** Переключает флаг "собственник совпадает со страхователем" */
  toggleOwnerIsSameAsInsured(): void {
    this.ownerIsSameAsInsured.set(!this.ownerIsSameAsInsured());
  }

  onSubmit(): void {
    console.log('Состояние формы:', this.form);
    console.log('Валидность формы:', this.form.valid);
    console.log('Ошибки формы:', this.form.errors);
  }
}
