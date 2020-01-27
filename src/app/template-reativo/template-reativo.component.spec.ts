import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReativoComponent } from './template-reativo.component';

describe('TemplateReativoComponent', () => {
  let component: TemplateReativoComponent;
  let fixture: ComponentFixture<TemplateReativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
