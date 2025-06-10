import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentFormComponent } from './document-form.component';
import { createDocumentForm } from './utils';

describe('DocumentFormComponent', () => {
  let component: DocumentFormComponent;
  let fixture: ComponentFixture<DocumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DocumentFormComponent);
    component = fixture.componentInstance;
    component.form = createDocumentForm();
    fixture.detectChanges();
  });

  it('должен создаваться', () => {
    expect(component).toBeTruthy();
  });
});
