import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsagoComponent } from './osago.component';

describe('OsagoComponent', () => {
  let component: OsagoComponent;
  let fixture: ComponentFixture<OsagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
