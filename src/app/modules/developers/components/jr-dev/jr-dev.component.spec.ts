import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JrDevComponent } from './jr-dev.component';

describe('JrDevComponent', () => {
  let component: JrDevComponent;
  let fixture: ComponentFixture<JrDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JrDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JrDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
