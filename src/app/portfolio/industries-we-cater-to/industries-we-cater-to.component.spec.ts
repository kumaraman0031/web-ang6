import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesWeCaterToComponent } from './industries-we-cater-to.component';

describe('IndustriesWeCaterToComponent', () => {
  let component: IndustriesWeCaterToComponent;
  let fixture: ComponentFixture<IndustriesWeCaterToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesWeCaterToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesWeCaterToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
