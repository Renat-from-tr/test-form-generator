import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OsagoComponent } from '../../modules/osago/osago.component';

@Component({
  selector: 'i-home',
  standalone: true,
  imports: [OsagoComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
