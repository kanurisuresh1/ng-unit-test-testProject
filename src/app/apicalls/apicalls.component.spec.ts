import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpdataService } from '../httpdata.service';
import { ApicallsComponent } from './apicalls.component';

describe('ApicallsComponent', () => {
  let component: ApicallsComponent;
  let fixture: ComponentFixture<ApicallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        ApicallsComponent
      ],
      providers : [
        HttpdataService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // it(`should NOT have any user in list before ngOnInit`, () => {
  //   expect(component.postDetails.length).toBe(0);
  // });

  // it('should call getPostDetails and get respons array', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(ApicallsComponent);
  //   const component = fixture.debugElement.componentInstance;
  //   const service = fixture.debugElement.injector.get(HttpdataService);

  //   service.getpostdata().subscribe(posts => {
  //     expect(component.postDetails.length).toBe(posts.length);
  //   });
    
  //   component.getPostDetails();
    
  // })) 
  


  
});
