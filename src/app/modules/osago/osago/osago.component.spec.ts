import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OsagoComponent } from './osago.component';
import { createOsagoForm } from './utils';

describe('OsagoComponent', () => {
  let component: OsagoComponent;
  let fixture: ComponentFixture<OsagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OsagoComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatCardModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();    fixture = TestBed.createComponent(OsagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have all form controls', () => {
    const form = component.form;
    expect(form.controls.insuredPerson).toBeDefined();
    expect(form.controls.owner).toBeDefined();
    expect(form.controls.vehicle).toBeDefined();
    expect(form.controls.contactData).toBeDefined();
    expect(form.controls.identityDocument).toBeDefined();
    expect(form.controls.isIndividualEntrepreneur).toBeDefined();
    expect(form.controls.inn).toBeDefined();
    expect(form.controls.hasSNILS).toBeDefined();
    expect(form.controls.SNILS).toBeDefined();
    expect(form.controls.isOwnerDriver).toBeDefined();
    expect(form.controls.comment).toBeDefined();
  });

  it('should initialize form controls with correct default values', () => {
    const form = component.form;
    expect(form.controls.isIndividualEntrepreneur.value).toBe(false);
    expect(form.controls.inn.value).toBeNull();
    expect(form.controls.hasSNILS.value).toBe(false);
    expect(form.controls.SNILS.value).toBeNull();
    expect(form.controls.isOwnerDriver.value).toBe(false);
    expect(form.controls.comment.value).toBeNull();
  });
  it('should render all form sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('i-person-form')).toBeTruthy();
    expect(compiled.querySelector('i-vehicle-form')).toBeTruthy();
    expect(compiled.querySelector('i-contacts-form')).toBeTruthy();
    expect(compiled.querySelector('i-document-form')).toBeTruthy();
    expect(compiled.querySelectorAll('mat-checkbox').length).toBe(3);
  });

  it('should show INN field when isIndividualEntrepreneur is true', () => {
    const form = component.form;
    form.controls.isIndividualEntrepreneur.setValue(true);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const innField = compiled.querySelector('input[placeholder="123456789012"]');
    expect(innField).toBeTruthy();
  });

  it('should show SNILS field when hasSNILS is true', () => {
    const form = component.form;
    form.controls.hasSNILS.setValue(true);
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const snilsField = compiled.querySelector('input[placeholder="123-456-789 12"]');
    expect(snilsField).toBeTruthy();
  });
});
