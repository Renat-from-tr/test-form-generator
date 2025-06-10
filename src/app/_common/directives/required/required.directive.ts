import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { startWith } from 'rxjs';

@Directive({
  selector: '[formControlName], [formControl]',
  standalone: true
})
export class RequiredValidatorDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private control: NgControl
  ) {}

  ngOnInit() {
    this.checkRequired();
    
    // Подписываемся на изменения статуса валидации
    if (this.control.statusChanges) {
      this.control.statusChanges
        .pipe(startWith(this.control.statusChanges))
        .subscribe(() => this.checkRequired());
    }
  }

  private checkRequired() {
    const formControl = this.getFormControl();
    
    if (formControl && formControl.validator) {
      const validator = formControl.validator({} as FormControl);
      const isRequired = validator && validator['required'];
      
      if (isRequired) {
        this.renderer.setAttribute(this.el.nativeElement, 'required', 'true');
      } else {
        this.renderer.removeAttribute(this.el.nativeElement, 'required');
      }
    }
  }

  private getFormControl(): FormControl | null {
    if (this.control instanceof FormControlDirective || this.control instanceof FormControlName) {
      return this.control.control as FormControl;
    }
    return null;
  }
}