import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroebusquedaComponent } from './heroebusqueda.component';

describe('HeroebusquedaComponent', () => {
  let component: HeroebusquedaComponent;
  let fixture: ComponentFixture<HeroebusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroebusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroebusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
