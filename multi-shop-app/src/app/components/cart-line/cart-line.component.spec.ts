import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLineComponent } from './cart-line.component';

describe('CartLineComponent', () => {
  let component: CartLineComponent;
  let fixture: ComponentFixture<CartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
