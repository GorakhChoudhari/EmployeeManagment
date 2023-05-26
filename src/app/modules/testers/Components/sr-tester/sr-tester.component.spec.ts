import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrTesterComponent } from './sr-tester.component';

describe('SrTesterComponent', () => {
  let component: SrTesterComponent;
  let fixture: ComponentFixture<SrTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrTesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
