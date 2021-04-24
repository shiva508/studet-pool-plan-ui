import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunjectDetailsComponent } from './sunject-details.component';

describe('SunjectDetailsComponent', () => {
  let component: SunjectDetailsComponent;
  let fixture: ComponentFixture<SunjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
