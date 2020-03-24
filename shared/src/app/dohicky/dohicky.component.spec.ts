import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DohickyComponent } from './dohicky.component';

describe('DohickyComponent', () => {
  let component: DohickyComponent;
  let fixture: ComponentFixture<DohickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DohickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DohickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
