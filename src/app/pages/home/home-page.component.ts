import { Component } from '@angular/core';
import { OsagoFormComponent } from '../../modules/osago/osago-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [OsagoFormComponent]
})
export class HomePageComponent {}
