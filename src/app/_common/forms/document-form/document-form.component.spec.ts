import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DocumentFormComponent } from './document-form.component';
import { DocumentFormGroup } from './models';
import { createDocumentForm } from './utils';

describe('DocumentFormComponent', () => {  let component: DocumentFormComponent;
  let fixture: ComponentFixture<DocumentFormComponent>;
  let form: DocumentFormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DocumentFormComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();    fixture = TestBed.createComponent(DocumentFormComponent);
    component = fixture.componentInstance;
    form = createDocumentForm();
    component.form = form;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all form controls', () => {
    expect(form.controls.type).toBeDefined();
    expect(form.controls.seriesNumber).toBeDefined();
    expect(form.controls.issueDate).toBeDefined();
  });

  it('should initialize form controls with null values', () => {
    expect(form.controls.type.value).toBeNull();
    expect(form.controls.seriesNumber.value).toBeNull();
    expect(form.controls.issueDate.value).toBeNull();
  });

  it('should validate required fields', () => {
    expect(form.controls.type.valid).toBeFalsy();
    expect(form.controls.seriesNumber.valid).toBeFalsy();
    expect(form.controls.issueDate.valid).toBeFalsy();
  });
  it('should validate seriesNumber pattern (10-12 digits)', () => {
    form.controls.seriesNumber.setValue('123');
    expect(form.controls.seriesNumber.valid).toBeFalsy();
    expect(form.controls.seriesNumber.errors?.['pattern']).toBeTruthy();
    
    form.controls.seriesNumber.setValue('1234567890');
    expect(form.controls.seriesNumber.valid).toBeTruthy();
    
    form.controls.seriesNumber.setValue('123456789012');
    expect(form.controls.seriesNumber.valid).toBeTruthy();
  });
  it('should have maxDate property', () => {
    expect(component.maxDate).toBeDefined();
    expect(component.maxDate instanceof Date).toBeTruthy();
  });

  it('should accept custom maxDate input', () => {
    const customDate = new Date('2020-12-31');
    component.maxDate = customDate;
    fixture.detectChanges();
    
    expect(component.maxDate).toEqual(customDate);
  });

  it('should display all form fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const typeField = compiled.querySelector('mat-select');
    const seriesNumberField = compiled.querySelector('input[placeholder="1234567890"]');
    const issueDateField = compiled.querySelector('input[matDatepicker]');

    expect(typeField).toBeTruthy();
    expect(seriesNumberField).toBeTruthy();
    expect(issueDateField).toBeTruthy();
  });
  it('should bind form controls correctly', () => {
    const typeControl = component.form.controls.type;
    const seriesNumberControl = component.form.controls.seriesNumber;
    const issueDateControl = component.form.controls.issueDate;

    typeControl.setValue('passport');
    seriesNumberControl.setValue('1234567890');
    issueDateControl.setValue(new Date('2020-01-01'));

    expect(typeControl.value).toBe('passport');
    expect(seriesNumberControl.value).toBe('1234567890');
    expect(issueDateControl.value).toEqual(new Date('2020-01-01'));
  });

  it('should have document types array', () => {
    expect(component.documentTypes).toBeDefined();
    expect(component.documentTypes.length).toBeGreaterThan(0);
    expect(component.documentTypes[0].value).toBeDefined();
    expect(component.documentTypes[0].name).toBeDefined();
    expect(typeof component.documentTypes[0].value).toBe('string');
    expect(typeof component.documentTypes[0].name).toBe('string');
  });
});
