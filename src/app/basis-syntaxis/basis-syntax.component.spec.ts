import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasisSyntaxComponent } from './basis-syntax.component';

describe('BasisSyntaxisComponent', () => {
  let component: BasisSyntaxComponent;
  let fixture: ComponentFixture<BasisSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasisSyntaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasisSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
