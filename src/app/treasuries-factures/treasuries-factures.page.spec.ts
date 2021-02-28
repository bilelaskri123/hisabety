import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreasuriesFacturesPage } from './treasuries-factures.page';

describe('TreasuriesFacturesPage', () => {
  let component: TreasuriesFacturesPage;
  let fixture: ComponentFixture<TreasuriesFacturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasuriesFacturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreasuriesFacturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
