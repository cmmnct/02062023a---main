import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigfootComponent } from './bigfoot.component';

describe('BigfootComponent', () => {
  let component: BigfootComponent;
  let fixture: ComponentFixture<BigfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigfootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
