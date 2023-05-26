import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrDevComponent } from './sr-dev.component';

describe('SrDevComponent', () => {
  let component: SrDevComponent;
  let fixture: ComponentFixture<SrDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
