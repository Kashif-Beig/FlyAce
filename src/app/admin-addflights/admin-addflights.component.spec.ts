import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddflightsComponent } from './admin-addflights.component';

describe('AdminAddflightsComponent', () => {
  let component: AdminAddflightsComponent;
  let fixture: ComponentFixture<AdminAddflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
