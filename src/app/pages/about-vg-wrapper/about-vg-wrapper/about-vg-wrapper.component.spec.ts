import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutVgWrapperComponent } from './about-vg-wrapper.component';


describe('AboutVgWrapperComponent', () => {
  let component: AboutVgWrapperComponent;
  let fixture: ComponentFixture<AboutVgWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutVgWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVgWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
