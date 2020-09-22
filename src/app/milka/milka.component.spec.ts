import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkaComponent } from './milka.component';

describe('MilkaComponent', () => {
  let component: MilkaComponent;
  let fixture: ComponentFixture<MilkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
