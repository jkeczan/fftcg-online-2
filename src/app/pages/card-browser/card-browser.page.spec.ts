import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardBrowserPage } from './card-browser.page';

describe('CardBrowserPage', () => {
  let component: CardBrowserPage;
  let fixture: ComponentFixture<CardBrowserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBrowserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardBrowserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
