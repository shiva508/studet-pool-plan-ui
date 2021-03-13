import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicparciceComponent } from './basicparcice.component';

describe('BasicparciceComponent', () => {
  let component: BasicparciceComponent;
  let fixture: ComponentFixture<BasicparciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicparciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicparciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
