import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassXIComponent } from './class-xi.component';

describe('ClassXIComponent', () => {
  let component: ClassXIComponent;
  let fixture: ComponentFixture<ClassXIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassXIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassXIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
