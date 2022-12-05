import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerDesignComponent } from './inner-design.component';

describe('InnerDesignComponent', () => {
  let component: InnerDesignComponent;
  let fixture: ComponentFixture<InnerDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
