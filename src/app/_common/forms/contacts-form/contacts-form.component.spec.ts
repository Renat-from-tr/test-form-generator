import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactsFormComponent } from './contacts-form.component';
import { createContactDataForm } from './utils';

describe('ContactsFormComponent', () => {
  let component: ContactsFormComponent;
  let fixture: ComponentFixture<ContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContactsFormComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsFormComponent);
    component = fixture.componentInstance;
    component.form = createContactDataForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display email and phone form fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailField = compiled.querySelector('input[type="email"]');
    const phoneField = compiled.querySelector('input[type="tel"]');

    expect(emailField).toBeTruthy();
    expect(phoneField).toBeTruthy();
  });

  it('should bind form controls correctly', () => {
    const emailControl = component.form.controls.email;
    const phoneControl = component.form.controls.phone;

    emailControl.setValue('test@example.com');
    phoneControl.setValue('+7 900 123-45-67');

    expect(emailControl.value).toBe('test@example.com');
    expect(phoneControl.value).toBe('+7 900 123-45-67');
  });
});
