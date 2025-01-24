import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCardComponent } from './proj-card.component';

describe('ProjCardComponent', () => {
  let component: ProjCardComponent;
  let fixture: ComponentFixture<ProjCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
