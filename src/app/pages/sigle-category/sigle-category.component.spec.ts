import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleCategoryComponent } from './sigle-category.component';

describe('SigleCategoryComponent', () => {
  let component: SigleCategoryComponent;
  let fixture: ComponentFixture<SigleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigleCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
