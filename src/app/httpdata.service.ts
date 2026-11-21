import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postModel } from './Model/post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {

BASE_URL ='https://jsonplaceholder.typicode.com/'

WATTMONK_URL='https://devspace.wattmonk.com/api/'

filterstart = 0;
limit = 10;


  constructor(private http:HttpClient) { }

  getpostdata(){
    return this.http.get<postModel[]>(this.BASE_URL + 'posts')
  }

  public addpostdata(post: postModel){
    const headers= new HttpHeaders();
    return this.http.post(this.BASE_URL + 'posts',post,{ headers });
  }

  getAlertAnnounce():Observable<any>{
    return this.http
      .get<any>(
        this.WATTMONK_URL + "announcements?_limit=" + this.limit + '&_start=' +this.filterstart+"&_sort=id:DESC",
        {  headers: new HttpHeaders({
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMyLCJpYXQiOjE2NDAxNDgyMTEsImV4cCI6MTY0Mjc0MDIxMX0.9KwPzoWpW5ZLvEEpF9jq__Co0jDHI_N3NCnv9wBFyy4'
        }), observe: "response" }
      )
     
  }
}
