import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegisterPageComponent } from './update-register-page.component';

describe('UpdateRegisterPageComponent', () => {
  let component: UpdateRegisterPageComponent;
  let fixture: ComponentFixture<UpdateRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
