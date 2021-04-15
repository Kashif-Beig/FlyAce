import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewscheduleComponent } from './admin-viewschedule.component';

describe('AdminViewscheduleComponent', () => {
  let component: AdminViewscheduleComponent;
  let fixture: ComponentFixture<AdminViewscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
