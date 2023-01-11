import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecontrolLayoutComponent } from './pagecontrol-layout.component';

describe('PagecontrolLayoutComponent', () => {
  let component: PagecontrolLayoutComponent;
  let fixture: ComponentFixture<PagecontrolLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagecontrolLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagecontrolLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
