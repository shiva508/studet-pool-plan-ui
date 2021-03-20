import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleFormComponent } from './component-lifecycle-form.component';

describe('ComponentLifecycleFormComponent', () => {
  let component: ComponentLifecycleFormComponent;
  let fixture: ComponentFixture<ComponentLifecycleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLifecycleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLifecycleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
