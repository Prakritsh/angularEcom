import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuForComponent } from './menu-for.component';

describe('MenuForComponent', () => {
  let component: MenuForComponent;
  let fixture: ComponentFixture<MenuForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuForComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
