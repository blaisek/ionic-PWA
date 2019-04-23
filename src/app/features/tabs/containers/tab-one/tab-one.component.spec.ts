import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOneComponent } from './tab-one.component';

describe('TabOneComponent', () => {
  let component: TabOneComponent;
  let fixture: ComponentFixture<TabOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOneComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
