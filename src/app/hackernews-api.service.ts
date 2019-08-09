import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class hackernewsApiService {
  baseUrl: string
       
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
   }
   fetchStories(storyType: string, page: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${storyType}?page=${page}`)
    
      
}

fetchItem(id: number): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/item/${id}.json`)
                  
}

fetchComments(id: number): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/comment/${id}`)
                 
}




}
