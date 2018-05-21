import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuberSecurityComponent } from './cuber-security.component';

describe('CuberSecurityComponent', () => {
  let component: CuberSecurityComponent;
  let fixture: ComponentFixture<CuberSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuberSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuberSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
