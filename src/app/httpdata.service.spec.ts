import { TestBed } from '@angular/core/testing';

import { HttpdataService } from './httpdata.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { postModel } from './Model/post.model';
import { wattMonkApi } from './Model/wattmonkApi';

describe('HttpdataService', () => {
  let dataservice: HttpdataService;
  let httpTestCtrl: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HttpdataService
      ],
    });

    dataservice = TestBed.get(HttpdataService);
    httpTestCtrl = TestBed.get(HttpTestingController)
  });



  it(`should fetch get from wattonk api check response`, () => {

    const testgetapi: wattMonkApi[] = [


      {
        "id": 33,
        "status": true,
        "published_at": "string",
        "created_at": "2021-11-29T05:47:04.000Z",
        "updated_at": "2021-12-12T13:44:10.000Z",
        "colorcode": "string",
        "textcolor": "string",
        "announcement": 354,
        "usertype": "string",
        "usergroup": "string",
        "role": "string",
        "type": "string",
        "users": "test"
      }

      // alertannoument
      // {
      //     "id": 300,
      //     "status": true,
      //     "type": "alert",
      //     "role": "test",
      //     "announcement": "test",
      //     "colorcode": "#1a800a",
      //     "textcolor": "#000000",
      //     "usertype": "allusers",
      //     "usergroup": {
      //       "id": 33,
      //       "name": "testing group",
      //       "description": "desc",
      //       "status": true,
      //       "created_at": "2021-11-29T05:47:04.000Z",
      //       "updated_at": "2021-12-12T13:44:10.000Z",
      //       "created_by": "test",
      //       "updated_by": "test",
      //       "announcement": 354
      //     },
      //     "users": "test"
      //   }
    ];


    dataservice.getAlertAnnounce().subscribe((res: any) => {
      expect(testgetapi).toBe(res.body, 'should check mock data');
    });

    let req = httpTestCtrl.expectOne(dataservice.WATTMONK_URL + "announcements?_limit=" + 10 + '&_start=' +0+"&_sort=id:DESC",);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testgetapi);
    httpTestCtrl.verify();


  });


  it(`should fetch get api`, () => {

    const testpost: postModel[] = [
      {
        "userId": 1,
        "id": 1,
        "title": "test title 1",
        "body": "sample 1"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "test title 1",
        "body": "sample 1"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "test title 1",
        "body": "sample 1"
      }
    ];


    dataservice.getpostdata().subscribe((posts: any) => {
      expect(testpost).toBe(posts, 'should check mock data');
    });

    let req = httpTestCtrl.expectOne(dataservice.BASE_URL + 'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testpost);
    httpTestCtrl.verify();


  });

  it(`should be add and return added posts`, () => {

    const newpost: postModel =
    {
      "userId": 1,
      "id": 1,
      "title": " New test ",
      "body": "sample post Body"
    }



    dataservice.addpostdata(newpost).subscribe((addposts: any) => {
      expect(addposts).toBe(newpost, 'should check mock data');
    });

    let req = httpTestCtrl.expectOne(dataservice.BASE_URL + 'posts');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(newpost);
    httpTestCtrl.verify();


  });


});
