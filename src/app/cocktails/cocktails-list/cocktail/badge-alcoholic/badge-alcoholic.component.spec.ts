import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeAlcoholicComponent } from './badge-alcoholic.component';

describe('BadgeAlcoholicComponent', () => {
  let component: BadgeAlcoholicComponent;
  let fixture: ComponentFixture<BadgeAlcoholicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeAlcoholicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeAlcoholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
