import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentBiodata } from './student-biodata';

describe('StudentBiodata', () => {
  let component: StudentBiodata;
  let fixture: ComponentFixture<StudentBiodata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentBiodata],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentBiodata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
