import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCoreFeaturesComponent } from './header-core-features.component';

describe('HeaderCoreFeaturesComponent', () => {
  let component: HeaderCoreFeaturesComponent;
  let fixture: ComponentFixture<HeaderCoreFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCoreFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCoreFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
