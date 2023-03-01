import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsaletableComponent } from './recentsaletable.component';

describe('RecentsaletableComponent', () => {
  let component: RecentsaletableComponent;
  let fixture: ComponentFixture<RecentsaletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentsaletableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentsaletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
