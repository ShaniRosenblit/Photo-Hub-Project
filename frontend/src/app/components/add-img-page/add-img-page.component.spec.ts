import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgPageComponent } from './add-img-page.component';

describe('AddImgPageComponent', () => {
  let component: AddImgPageComponent;
  let fixture: ComponentFixture<AddImgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImgPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
