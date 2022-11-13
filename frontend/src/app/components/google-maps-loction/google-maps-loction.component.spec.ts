import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsLoctionComponent } from './google-maps-loction.component';

describe('GoogleMapsLoctionComponent', () => {
  let component: GoogleMapsLoctionComponent;
  let fixture: ComponentFixture<GoogleMapsLoctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapsLoctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsLoctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
