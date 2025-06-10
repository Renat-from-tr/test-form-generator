import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonFormComponent } from './person-form.component';
import { createPersonForm } from './utils';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    component.form = createPersonForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
