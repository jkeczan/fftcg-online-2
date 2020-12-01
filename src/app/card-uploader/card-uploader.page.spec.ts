import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardUploaderPage } from './card-uploader.page';

describe('CardUploaderPage', () => {
  let component: CardUploaderPage;
  let fixture: ComponentFixture<CardUploaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUploaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardUploaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
