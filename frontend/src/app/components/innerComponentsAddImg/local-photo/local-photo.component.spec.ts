import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPhotoComponent } from './local-photo.component';

describe('LocalPhotoComponent', () => {
  let component: LocalPhotoComponent;
  let fixture: ComponentFixture<LocalPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
