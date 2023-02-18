import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassXComponent } from './class-x.component';

describe('ClassXComponent', () => {
  let component: ClassXComponent;
  let fixture: ComponentFixture<ClassXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
