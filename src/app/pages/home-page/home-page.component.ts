import { Component } from '@angular/core';
import { PersonFormComponent } from '../../_common/forms/person-form/person-form.component';
import { createPersonForm } from '../../_common/forms/person-form/utils/create-person-form.function';
import { OsagoComponent } from '../../modules/osago/osago.component';

@Component({
  selector: 'i-home-page',
  standalone: true,
  imports: [OsagoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
