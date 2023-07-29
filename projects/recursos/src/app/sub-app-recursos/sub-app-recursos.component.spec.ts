import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAppRecursosComponent } from './sub-app-recursos.component';

describe('SubAppRecursosComponent', () => {
  let component: SubAppRecursosComponent;
  let fixture: ComponentFixture<SubAppRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAppRecursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubAppRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
