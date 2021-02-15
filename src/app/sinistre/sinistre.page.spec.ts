import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinistrePage } from './sinistre.page';

describe('SinistrePage', () => {
  let component: SinistrePage;
  let fixture: ComponentFixture<SinistrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinistrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinistrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
