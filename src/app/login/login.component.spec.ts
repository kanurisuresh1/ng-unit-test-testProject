import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import { HttpdataService } from '../httpdata.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule,
        HttpClientTestingModule],
      providers: [
        HttpdataService,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });


  it('check Box validity', () => {
    let errors: any;
    let checkBox = component.loginForm.controls['check'];

    errors = checkBox.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set check box to something
    checkBox.setValue("bike");
    errors = checkBox.errors || {};
    expect(errors['required']).toBeFalsy();

  });

  it('dropdown validity', () => {
    let errors: any;
    let dropdown = component.loginForm.controls['dropdown'];

    errors = dropdown.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set dropdown to something
    dropdown.setValue("sec");
    errors = dropdown.errors || {};
    expect(errors['required']).toBeFalsy();

  });

  it('gender validity', () => {
    let errors: any;
    let gender = component.loginForm.controls['gender'];

    errors = gender.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set gender to something
    gender.setValue("female");
    errors = gender.errors || {};
    expect(errors['required']).toBeFalsy();

  });

  it('email field validity', () => {
    let errors: any;
    let email = component.loginForm.controls['useremail'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('password field validity', () => {
    let errors: any;
    let password = component.loginForm.controls['pws'];

    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set password to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

  });


  it('submitting a form validity', () => {
    expect(component.loginForm.valid).toBeFalsy();

    component.loginForm.controls['check'].setValue("bike");
    component.loginForm.controls['dropdown'].setValue("sec");
    component.loginForm.controls['gender'].setValue("female");
    component.loginForm.controls['useremail'].setValue("test@test.com");
    component.loginForm.controls['pws'].setValue("123456789");

    expect(component.loginForm.valid).toBeTruthy();
    component.cheackUser();
  });


  // it('validation checking for requied  in all fields ', () => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     const fieldcheckbox1: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#checkbox1');
  //     fieldcheckbox1.value = '';
  //     fieldcheckbox1.dispatchEvent(new Event('input'));


  //     const fielddropdown: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#dropdownvalue');
  //     fielddropdown.value = '';
  //     fielddropdown.dispatchEvent(new Event('input'));


  //     const fieldradiobut: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#radiobut');
  //     fieldradiobut.value = '';
  //     fieldradiobut.dispatchEvent(new Event('input'));


  //     const fieldemailfield: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailfield');
  //     fieldemailfield.value = '';
  //     fieldemailfield.dispatchEvent(new Event('input'));

  //     const fieldpasswordfield: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordfield');
  //     fieldpasswordfield.value = '';
  //     fieldpasswordfield.dispatchEvent(new Event('input'));

  //     fixture.detectChanges();

  //     fixture.whenStable().then(() => {
  //       const validationcheckbox1: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#valichechk');
  //       expect(validationcheckbox1).toBeNull();
  //       expect(validationcheckbox1.innerHTML).toEqual('please enter check box');

  //       const validationdropdown: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#validrop');
  //       expect(validationdropdown).toBeNull();
  //       expect(validationdropdown.innerHTML).toEqual('please enter dropdown');

  //       const validationradiobut: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#valiradio');
  //       expect(validationradiobut).toBeNull();
  //       expect(validationradiobut.innerHTML).toEqual('please enter gender');

  //       const validationemailfield: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#valiemail');
  //       expect(validationemailfield).toBeNull();
  //       expect(validationemailfield.innerHTML).toEqual('Enter Emai');

  //       const validationpasswordfield: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#valipass');
  //       expect(validationpasswordfield).toBeNull();
  //       expect(validationpasswordfield.innerHTML).toEqual('Please enter Password.');

  //       const loginbutton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#btnlogin');
  //         const component = fixture.debugElement.componentInstance;
  //       const mocklogin = spyOn(component,'cheackUser');
  //       loginbutton.click();
  //       expect(mocklogin).toHaveBeenCalledTimes(1)

  //     })
  //   })

  // })


  it('should call getPostDetails Wattmonk api call', fakeAsync(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(HttpdataService);

    // service.getAlertAnnounce().subscribe(posts => {
    //   expect(component.getWattmonkDetails).toEqual(posts);
    // });

    // spyOn(service, 'getAlertAnnounce').and.callThrough();

    let getapivalue = component.secmet(x)

    expect(getapivalue).toEqual(true);

  }))

  // it('should call getPostDetails Wattmonk api call on empty', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const component = fixture.debugElement.componentInstance;
  //   const service = fixture.debugElement.injector.get(HttpdataService);
  //   expect(component.getemptyDetails).toBeTruthy();
  //   component.getwattmonkapi();

  // }))


});
function x(x: any): any {
  throw new Error('Function not implemented.');
}

