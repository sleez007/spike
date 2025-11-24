import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionWrapper } from './description-wrapper';

describe('DescriptionWrapper', () => {
  let component: DescriptionWrapper;
  let fixture: ComponentFixture<DescriptionWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
