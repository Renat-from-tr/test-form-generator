import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleFormComponent } from './vehicle-form.component';
import { createVehicleForm } from './utils';

describe('VehicleFormComponent', () => {
  let component: VehicleFormComponent;
  let fixture: ComponentFixture<VehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(VehicleFormComponent);
    component = fixture.componentInstance;
    component.form = createVehicleForm();
    fixture.detectChanges();
  });

  it('должен создаваться', () => {
    expect(component).toBeTruthy();
  });
});
