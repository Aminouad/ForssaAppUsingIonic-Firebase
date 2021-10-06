import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteOnlyForAdminPage } from './delete-only-for-admin.page';

describe('DeleteOnlyForAdminPage', () => {
  let component: DeleteOnlyForAdminPage;
  let fixture: ComponentFixture<DeleteOnlyForAdminPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOnlyForAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteOnlyForAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
