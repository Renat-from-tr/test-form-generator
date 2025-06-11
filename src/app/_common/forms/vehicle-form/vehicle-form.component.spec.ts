// vehicle-form/vehicle-form.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleFormComponent } from './vehicle-form.component';
import { createVehicleForm } from './utils';
import { Validators } from '@angular/forms';

describe('VehicleFormComponent', () => {
  let component: VehicleFormComponent;
  let fixture: ComponentFixture<VehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleFormComponent);
    component = fixture.componentInstance;
    component.form = createVehicleForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with correct validators', () => {
    const form = component.form;
    
    expect(form.controls.makeModel.hasValidator(Validators.required)).toBeTrue();
    expect(form.controls.horsepower.hasValidator(Validators.required)).toBeTrue();
    expect(form.controls.horsepower.hasValidator(Validators.min(1))).toBeTrue();
    expect(form.controls.horsepower.hasValidator(Validators.max(2000))).toBeTrue();
    expect(form.controls.registrationNumber.hasValidator(Validators.required)).toBeTrue();
    expect(form.controls.registrationNumber.hasValidator(Validators.pattern(/^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/iu))).toBeTrue();
    expect(form.controls.vin.hasValidator(Validators.required)).toBeTrue();
    expect(form.controls.vin.hasValidator(Validators.minLength(17))).toBeTrue();
    expect(form.controls.vin.hasValidator(Validators.maxLength(17))).toBeTrue();
    expect(form.controls.stsNumber.hasValidator(Validators.required)).toBeTrue();
    expect(form.controls.stsNumber.hasValidator(Validators.pattern(/^\d{2}[А-Я]{2}\d{6}$/iu))).toBeTrue();
    expect(form.controls.stsIssueDate.hasValidator(Validators.required)).toBeTrue();
  });

  it('should have today date as max date for stsIssueDate', () => {
    expect(component.today).toEqual(new Date());
  });
});