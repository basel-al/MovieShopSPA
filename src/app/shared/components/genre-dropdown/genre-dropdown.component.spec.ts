import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDropdownComponent } from './genre-dropdown.component';

describe('GenreDropdownComponent', () => {
  let component: GenreDropdownComponent;
  let fixture: ComponentFixture<GenreDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
