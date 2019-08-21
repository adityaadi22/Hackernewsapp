import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
  export class CommentserviceService {
  baseUrl: string ;
  constructor(private httpClient: HttpClient) {
    this.baseUrl ='https://jsonplaceholder.typicode.com/';
   }

   fetchComments(): Observable<any> {
    // console.log
    return this.httpClient.get('https://jsonplaceholder.typicode.com/comments')    
 
  }



}
