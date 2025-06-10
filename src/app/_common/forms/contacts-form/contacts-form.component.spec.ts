import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsFormComponent } from './contacts-form.component';
import { createContactsForm } from './utils';

describe('ContactsFormComponent', () => {
  let component: ContactsFormComponent;
  let fixture: ComponentFixture<ContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactsFormComponent);
    component = fixture.componentInstance;
    component.form = createContactsForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
