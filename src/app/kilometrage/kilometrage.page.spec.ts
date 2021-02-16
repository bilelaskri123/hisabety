import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KilometragePage } from './kilometrage.page';

describe('KilometragePage', () => {
  let component: KilometragePage;
  let fixture: ComponentFixture<KilometragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilometragePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KilometragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
