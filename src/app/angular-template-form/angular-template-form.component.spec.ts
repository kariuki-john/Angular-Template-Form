import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateFormComponent } from './angular-template-form.component';

describe('AngularTemplateFormComponent', () => {
  let component: AngularTemplateFormComponent;
  let fixture: ComponentFixture<AngularTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
