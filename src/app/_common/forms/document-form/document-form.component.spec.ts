// document-form/document-form.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentFormComponent } from './document-form.component';
import { createDocumentForm } from './utils';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DocumentFormComponent', () => {
  let component: DocumentFormComponent;
  let fixture: ComponentFixture<DocumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DocumentFormComponent,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentFormComponent);
    component = fixture.componentInstance;
    component.form = createDocumentForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default maxDate as current date', () => {
    const currentDate = new Date();
    expect(component.maxDate.getFullYear()).toBe(currentDate.getFullYear());
    expect(component.maxDate.getMonth()).toBe(currentDate.getMonth());
    expect(component.maxDate.getDate()).toBe(currentDate.getDate());
  });

  it('should have document types defined', () => {
    expect(component.documentTypes.length).toBe(2);
    expect(component.documentTypes[0].value).toBe('passport');
    expect(component.documentTypes[1].value).toBe('driver_license');
  });

  it('should validate seriesNumber pattern', () => {
    const seriesNumberControl = component.form.controls.seriesNumber;
    
    seriesNumberControl.setValue('123');
    expect(seriesNumberControl.invalid).toBeTruthy();
    
    seriesNumberControl.setValue('1234567890');
    expect(seriesNumberControl.valid).toBeTruthy();
    
    seriesNumberControl.setValue('123456789012');
    expect(seriesNumberControl.valid).toBeTruthy();
  });

  it('should accept custom maxDate', () => {
    const customDate = new Date(2023, 0, 1);
    component.maxDate = customDate;
    fixture.detectChanges();
    
    expect(component.maxDate).toEqual(customDate);
  });
});