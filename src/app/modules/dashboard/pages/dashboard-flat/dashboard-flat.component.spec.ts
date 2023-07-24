import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFlatComponent } from './dashboard-flat.component';

describe('DashboardFlatComponent', () => {
  let component: DashboardFlatComponent;
  let fixture: ComponentFixture<DashboardFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
