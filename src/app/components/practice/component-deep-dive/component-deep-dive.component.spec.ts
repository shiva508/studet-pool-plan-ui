import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDeepDiveComponent } from './component-deep-dive.component';

describe('ComponentDeepDiveComponent', () => {
  let component: ComponentDeepDiveComponent;
  let fixture: ComponentFixture<ComponentDeepDiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDeepDiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
