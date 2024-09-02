import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHooksComponent } from './custom-hooks.component';

describe('CustomHooksComponent', () => {
  let component: CustomHooksComponent;
  let fixture: ComponentFixture<CustomHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomHooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
