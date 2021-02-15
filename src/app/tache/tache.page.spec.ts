import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TachePage } from './tache.page';

describe('TachePage', () => {
  let component: TachePage;
  let fixture: ComponentFixture<TachePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
