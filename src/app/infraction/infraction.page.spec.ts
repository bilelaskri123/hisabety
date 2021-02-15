import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfractionPage } from './infraction.page';

describe('InfractionPage', () => {
  let component: InfractionPage;
  let fixture: ComponentFixture<InfractionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfractionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
