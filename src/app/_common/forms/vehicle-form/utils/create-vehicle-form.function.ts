import { FormControl, FormGroup, Validators } from "@angular/forms";
import { VehicleFormGroup } from "../models";

/** Создание формы авто */
export function createVehicleForm(): VehicleFormGroup {
    return new FormGroup({
        makeModel: new FormControl(null, Validators.required),
        horsepower: new FormControl(null, Validators.required),
        registrationNumber: new FormControl(null, Validators.required),
        vin: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{17}$/)]),
        stsNumber: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
        stsIssueDate: new FormControl(null, Validators.required),
    });
}