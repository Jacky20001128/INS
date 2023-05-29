import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoothDetailPage } from './booth-detail.page';

describe('BoothDetailPage', () => {
  let component: BoothDetailPage;
  let fixture: ComponentFixture<BoothDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoothDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
