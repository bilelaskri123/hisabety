import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EssencePage } from './essence.page';

describe('EssencePage', () => {
  let component: EssencePage;
  let fixture: ComponentFixture<EssencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EssencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
