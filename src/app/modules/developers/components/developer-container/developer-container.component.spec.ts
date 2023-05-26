import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperContainerComponent } from './developer-container.component';

describe('DeveloperContainerComponent', () => {
  let component: DeveloperContainerComponent;
  let fixture: ComponentFixture<DeveloperContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
