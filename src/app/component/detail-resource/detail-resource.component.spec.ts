import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResourceComponent } from './detail-resource.component';

describe('DetailResourceComponent', () => {
  let component: DetailResourceComponent;
  let fixture: ComponentFixture<DetailResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailResourceComponent]
    });
    fixture = TestBed.createComponent(DetailResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
