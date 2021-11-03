import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameLobbyPage } from './game-lobby.page';

describe('GameLobbyPage', () => {
  let component: GameLobbyPage;
  let fixture: ComponentFixture<GameLobbyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLobbyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameLobbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
