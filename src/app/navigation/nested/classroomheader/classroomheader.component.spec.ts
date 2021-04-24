import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomheaderComponent } from './classroomheader.component';

describe('ClassroomheaderComponent', () => {
  let component: ClassroomheaderComponent;
  let fixture: ComponentFixture<ClassroomheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
