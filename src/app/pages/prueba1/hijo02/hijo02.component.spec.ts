import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo02Component } from './hijo02.component';

describe('Hijo02Component', () => {
  let component: Hijo02Component;
  let fixture: ComponentFixture<Hijo02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hijo02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
