import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateStudentsComponent } from './allocate-students.component';

describe('AllocateStudentsComponent', () => {
  let component: AllocateStudentsComponent;
  let fixture: ComponentFixture<AllocateStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllocateStudentsComponent]
    });
    fixture = TestBed.createComponent(AllocateStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
