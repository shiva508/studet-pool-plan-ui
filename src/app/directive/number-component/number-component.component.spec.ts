import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberComponentComponent } from './number-component.component';

describe('NumberComponentComponent', () => {
  let component: NumberComponentComponent;
  let fixture: ComponentFixture<NumberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
