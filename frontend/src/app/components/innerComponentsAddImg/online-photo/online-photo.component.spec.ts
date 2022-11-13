import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePhotoComponent } from './online-photo.component';

describe('OnlinePhotoComponent', () => {
  let component: OnlinePhotoComponent;
  let fixture: ComponentFixture<OnlinePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
