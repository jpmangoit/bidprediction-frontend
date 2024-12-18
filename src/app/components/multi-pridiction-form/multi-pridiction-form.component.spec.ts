import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPridictionFormComponent } from './multi-pridiction-form.component';

describe('MultiPridictionFormComponent', () => {
  let component: MultiPridictionFormComponent;
  let fixture: ComponentFixture<MultiPridictionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiPridictionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiPridictionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
