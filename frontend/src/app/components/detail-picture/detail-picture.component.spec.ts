import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPictureComponent } from './detail-picture.component';

describe('DetailPictureComponent', () => {
  let component: DetailPictureComponent;
  let fixture: ComponentFixture<DetailPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
