import { Component, OnInit } from '@angular/core';
import { HttpdataService } from '../httpdata.service';
import { postModel } from '../Model/post.model';

@Component({
  selector: 'app-apicalls',
  templateUrl: './apicalls.component.html',
  styleUrls: ['./apicalls.component.css']
})
export class ApicallsComponent implements OnInit {
  postDetails: postModel[];
  

  constructor(private service : HttpdataService){
    this.postDetails = [];
  }

  ngOnInit(){
    this.getPostDetails();
  }

  getPostDetails(){
    this.service.getpostdata().subscribe((response) => {
      if(response && response.length > 0) {
        this.postDetails = response;
      } else {
        this.postDetails = [];
      }
    })
  }

}
