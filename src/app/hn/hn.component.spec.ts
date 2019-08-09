import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HNComponent } from './hn.component';

describe('HNComponent', () => {
  let component: HNComponent;
  let fixture: ComponentFixture<HNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
