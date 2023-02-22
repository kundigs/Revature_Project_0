import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PODComponent } from './pod.component';

describe('PODComponent', () => {
  let component: PODComponent;
  let fixture: ComponentFixture<PODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PODComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
