import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DocumentFormGroup } from './models';

@Component({
    selector: 'i-document-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
    ],
    templateUrl: './document-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentFormComponent {
    /** Типизированная форма для паспортных данных */
    @Input({ required: true }) form!: DocumentFormGroup;
    
    /** Максимальная дата выдачи документа (по умолчанию текущая дата) */
    @Input() maxDate: Date = new Date();
    
    /** Массив типов документов */
    readonly documentTypes = [
        { value: 'passport', name: 'Паспорт РФ' },
        { value: 'driver_license', name: 'Водительское удостоверение' },
    ];
}
