import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAccordion } from './server-accordion';

describe('ServerAccordion', () => {
  let component: ServerAccordion;
  let fixture: ComponentFixture<ServerAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
