import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPage } from './nasa.page';

describe('NasaPage', () => {
  let component: NasaPage;
  let fixture: ComponentFixture<NasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
