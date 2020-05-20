import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeTileComponent } from './degree-tile.component';

describe('DegreeTileComponent', () => {
  let component: DegreeTileComponent;
  let fixture: ComponentFixture<DegreeTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
