import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasecurityComponent } from './datasecurity.component';

describe('DatasecurityComponent', () => {
  let component: DatasecurityComponent;
  let fixture: ComponentFixture<DatasecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
