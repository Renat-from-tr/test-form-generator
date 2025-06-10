import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OsagoFormComponent } from './osago-form.component';
import { createOsagoForm } from './utils';

describe('OsagoFormComponent', () => {
  let component: OsagoFormComponent;
  let fixture: ComponentFixture<OsagoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsagoFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(OsagoFormComponent);
    component = fixture.componentInstance;
    component.form = createOsagoForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
