import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabingdingComponent } from './databingding.component';

describe('DatabingdingComponent', () => {
  let component: DatabingdingComponent;
  let fixture: ComponentFixture<DatabingdingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabingdingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabingdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
