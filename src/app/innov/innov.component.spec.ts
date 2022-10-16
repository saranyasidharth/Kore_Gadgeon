import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovComponent } from './innov.component';

describe('InnovComponent', () => {
  let component: InnovComponent;
  let fixture: ComponentFixture<InnovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
