import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiglePostComponent } from './sigle-post.component';

describe('SiglePostComponent', () => {
  let component: SiglePostComponent;
  let fixture: ComponentFixture<SiglePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiglePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
