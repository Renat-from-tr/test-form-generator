import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonFormComponent } from './person-form.component';
import { createPersonForm } from './utils/create-person-form.function';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PersonFormComponent,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatRadioModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    component.form = createPersonForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default maxBirthdate (yesterday)', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(component.maxBirthdate.getDate()).toBe(yesterday.getDate());
  });

  it('should accept custom maxBirthdate input', () => {
    const testDate = new Date('2000-01-01');
    component.maxBirthdate = testDate;
    fixture.detectChanges();
    expect(component.maxBirthdate).toBe(testDate);
  });

  it('should render all form controls', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[formControlName="fullName"]')).toBeTruthy();
    expect(compiled.querySelector('input[formControlName="birthDate"]')).toBeTruthy();
    expect(compiled.querySelector('mat-radio-group[formControlName="gender"]')).toBeTruthy();
    expect(compiled.querySelector('input[formControlName="address"]')).toBeTruthy();
  });

  it('should show validation errors when required fields are empty and touched', () => {
    const compiled = fixture.nativeElement;
    
    // Mark all controls as touched
    Object.values(component.form.controls).forEach(control => {
      control.markAsTouched();
    });
    
    fixture.detectChanges();

    const errors = compiled.querySelectorAll('mat-error');
    expect(errors.length).toBe(4);
    errors.forEach((error: HTMLElement) => {
      expect(error.textContent).toContain('Обязательное поле');
    });
  });
});