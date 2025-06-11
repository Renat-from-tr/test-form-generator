import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

import { PersonFormComponent } from './person-form.component';
import { PersonFormGroup } from './models';
import { createPersonForm } from './utils';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;
  let form: PersonFormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PersonFormComponent,
        BrowserAnimationsModule,
        MatNativeDateModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    form = createPersonForm();
    component.form = form;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all form controls', () => {
    expect(form.controls.fullName).toBeDefined();
    expect(form.controls.birthDate).toBeDefined();
    expect(form.controls.gender).toBeDefined();
    expect(form.controls.address).toBeDefined();
  });
  it('should initialize form controls with null values', () => {
    expect(form.controls.fullName.value).toBeNull();
    expect(form.controls.birthDate.value).toBeNull();
    expect(form.controls.gender.value).toBeNull();
    expect(form.controls.address.value).toBeNull();
  });

  it('should validate required fields', () => {
    expect(form.controls.fullName.valid).toBeFalsy();
    expect(form.controls.birthDate.valid).toBeFalsy();
    expect(form.controls.gender.valid).toBeFalsy();
    expect(form.controls.address.valid).toBeFalsy();
  });

  it('should validate fullName minimum length', () => {
    form.controls.fullName.setValue('А');
    expect(form.controls.fullName.valid).toBeFalsy();
    expect(form.controls.fullName.errors?.['minlength']).toBeTruthy();
    
    form.controls.fullName.setValue('Иван Иванов');
    expect(form.controls.fullName.valid).toBeTruthy();
  });

  it('should validate minimum age (18 years)', () => {
    const today = new Date();
    const underageDate = new Date(today.getFullYear() - 17, today.getMonth(), today.getDate());
    const validDate = new Date(today.getFullYear() - 25, today.getMonth(), today.getDate());
    
    form.controls.birthDate.setValue(underageDate);
    expect(form.controls.birthDate.valid).toBeFalsy();
    expect(form.controls.birthDate.errors?.['minAge']).toBeTruthy();
    
    form.controls.birthDate.setValue(validDate);
    expect(form.controls.birthDate.valid).toBeTruthy();
  });

  it('should validate address minimum length', () => {
    form.controls.address.setValue('Короткий');
    expect(form.controls.address.valid).toBeFalsy();
    expect(form.controls.address.errors?.['minlength']).toBeTruthy();
    
    form.controls.address.setValue('г. Москва, ул. Тверская, д. 1');
    expect(form.controls.address.valid).toBeTruthy();
  });
});
