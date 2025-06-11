import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { VehicleFormComponent } from './vehicle-form.component';
import { createVehicleForm } from './utils';

describe('VehicleFormComponent', () => {
  let component: VehicleFormComponent;
  let fixture: ComponentFixture<VehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleFormComponent, ReactiveFormsModule, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleFormComponent);
    component = fixture.componentInstance;
    component.form = createVehicleForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form input', () => {
    expect(component.form).toBeDefined();
    expect(component.form instanceof FormGroup).toBeTruthy();
  });

  it('should have all required controls', () => {
    const controls = component.form.controls;
    expect(controls.makeModel).toBeDefined();
    expect(controls.horsepower).toBeDefined();
    expect(controls.registrationNumber).toBeDefined();
    expect(controls.vin).toBeDefined();
    expect(controls.stsNumber).toBeDefined();
    expect(controls.stsIssueDate).toBeDefined();
  });
});
