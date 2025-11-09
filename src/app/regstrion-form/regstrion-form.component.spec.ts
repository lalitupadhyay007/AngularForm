import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstrionFormComponent } from './regstrion-form.component';

describe('RegstrionFormComponent', () => {
  let component: RegstrionFormComponent;
  let fixture: ComponentFixture<RegstrionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegstrionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegstrionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
