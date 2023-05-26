import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JrTesterComponent } from './jr-tester.component';

describe('JrTesterComponent', () => {
  let component: JrTesterComponent;
  let fixture: ComponentFixture<JrTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JrTesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JrTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
