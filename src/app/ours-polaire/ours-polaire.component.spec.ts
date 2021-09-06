import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OursPolaireComponent } from './ours-polaire.component';

describe('OursPolaireComponent', () => {
  let component: OursPolaireComponent;
  let fixture: ComponentFixture<OursPolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OursPolaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OursPolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
