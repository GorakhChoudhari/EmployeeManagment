import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterConatinerComponent } from './tester-conatiner.component';

describe('TesterConatinerComponent', () => {
  let component: TesterConatinerComponent;
  let fixture: ComponentFixture<TesterConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterConatinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesterConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
