import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsIotComponent } from './robotics-iot.component';

describe('RoboticsIotComponent', () => {
  let component: RoboticsIotComponent;
  let fixture: ComponentFixture<RoboticsIotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticsIotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticsIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
