import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpdataService } from '../httpdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getWattmonkDetails: any;
  getemptyDetails = [];

  // getWattmon = []
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: HttpdataService) {
  }


  ngOnInit() {
    this.loginForm = new FormGroup({
      check: new FormControl('', [Validators.required]),
      dropdown: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      useremail: new FormControl('', [Validators.required, Validators.email]),
      pws: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    this.getwattmonkapi()
  }

  cheackUser() {
    console.log(this.loginForm.value)
  }

  secmet(getWattmon: any) {
    console.log(getWattmon);
    if (getWattmon) {
      console.log("true")
      return true
    } else {
      console.log("false")
      return false
    }
  }

  getwattmonkapi() {
    this.service.getAlertAnnounce().subscribe(response => {
      console.log(response);
      if (response.body.length > 0) {
        this.getWattmonkDetails = response.body;
        var getWattmon = response.body;
        this.secmet(getWattmon);
      } else {
        this.getemptyDetails = [];
      }
    })
  }

}
