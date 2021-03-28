import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamNavigationComponent } from './param-navigation.component';

describe('ParamNavigationComponent', () => {
  let component: ParamNavigationComponent;
  let fixture: ComponentFixture<ParamNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
