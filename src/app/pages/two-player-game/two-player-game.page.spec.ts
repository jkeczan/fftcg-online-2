import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoPlayerGamePage } from './two-player-game.page';

describe('TwoPlayerGamePage', () => {
  let component: TwoPlayerGamePage;
  let fixture: ComponentFixture<TwoPlayerGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPlayerGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoPlayerGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
