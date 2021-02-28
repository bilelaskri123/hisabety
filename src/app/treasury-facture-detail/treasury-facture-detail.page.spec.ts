import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreasuryFactureDetailPage } from './treasury-facture-detail.page';

describe('TreasuryFactureDetailPage', () => {
  let component: TreasuryFactureDetailPage;
  let fixture: ComponentFixture<TreasuryFactureDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasuryFactureDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreasuryFactureDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
