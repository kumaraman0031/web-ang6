import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPresenceComponent } from './client-presence.component';

describe('ClientPresenceComponent', () => {
  let component: ClientPresenceComponent;
  let fixture: ComponentFixture<ClientPresenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
