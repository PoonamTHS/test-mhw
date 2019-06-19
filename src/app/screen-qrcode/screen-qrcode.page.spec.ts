import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenQrcodePage } from './screen-qrcode.page';

describe('ScreenQrcodePage', () => {
  let component: ScreenQrcodePage;
  let fixture: ComponentFixture<ScreenQrcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenQrcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenQrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
