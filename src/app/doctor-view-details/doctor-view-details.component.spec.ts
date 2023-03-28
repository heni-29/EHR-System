import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewDetailsComponent } from './doctor-view-details.component';

describe('DoctorViewDetailsComponent', () => {
  let component: DoctorViewDetailsComponent;
  let fixture: ComponentFixture<DoctorViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
