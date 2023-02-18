import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassXIIComponent } from './class-xii.component';

describe('ClassXIIComponent', () => {
  let component: ClassXIIComponent;
  let fixture: ComponentFixture<ClassXIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassXIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassXIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
