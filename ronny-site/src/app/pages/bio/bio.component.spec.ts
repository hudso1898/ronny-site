import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BioComponent } from './bio.component';

describe('BioComponent', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
