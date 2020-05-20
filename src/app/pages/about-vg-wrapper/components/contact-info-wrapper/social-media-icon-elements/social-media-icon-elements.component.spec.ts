import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaIconElementsComponent } from './social-media-icon-elements.component';

describe('SocialMediaIconElementsComponent', () => {
  let component: SocialMediaIconElementsComponent;
  let fixture: ComponentFixture<SocialMediaIconElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaIconElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaIconElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
