import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreKeycloakMaur025Component } from './core-keycloak-maur025.component';

describe('CoreKeycloakMaur025Component', () => {
  let component: CoreKeycloakMaur025Component;
  let fixture: ComponentFixture<CoreKeycloakMaur025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreKeycloakMaur025Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreKeycloakMaur025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
