import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUP } from './sign-up';

describe('SignUP', () => {
  let component: SignUP;
  let fixture: ComponentFixture<SignUP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUP],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
