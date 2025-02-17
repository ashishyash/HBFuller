import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealManagerComponent } from './deal-manager.component';

describe('DealManagerComponent', () => {
  let component: DealManagerComponent;
  let fixture: ComponentFixture<DealManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
