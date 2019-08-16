import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {
  baseUrl: string

 add (){
  
 }
  constructor(private httpClient: HttpClient) {
    this.baseUrl ='https://jsonplaceholder.typicode.com/';
   }
}
