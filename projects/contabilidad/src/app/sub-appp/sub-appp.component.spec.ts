import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubApppComponent } from './sub-appp.component';

describe('SubApppComponent', () => {
  let component: SubApppComponent;
  let fixture: ComponentFixture<SubApppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubApppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubApppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
