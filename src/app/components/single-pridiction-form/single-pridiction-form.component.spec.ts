import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePridictionFormComponent } from './single-pridiction-form.component';

describe('SinglePridictionFormComponent', () => {
  let component: SinglePridictionFormComponent;
  let fixture: ComponentFixture<SinglePridictionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePridictionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePridictionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
