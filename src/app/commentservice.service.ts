import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
  export class CommentserviceService {
  baseUrl: string ;
  id1 : any;
  count:number;
  constructor(private httpClient: HttpClient) {

    this.baseUrl ='http://localhost:3000/News';
   }
     
  fetchItem(id: number): Observable<any> {
    console.log(id);
      return this.httpClient.get(`${this.baseUrl}/item/${id}.json`)
                    
  } 

  setId(id : any)
  {
    this.id1 = id;
    console.log(this.id1);
  }

  getId()
  {
    return this.id1;
  }

   fetchComments(): Observable<any> {
   // console.log(id);
    
      return this.httpClient.get(`${this.baseUrl}`)
    }
    //else{
      //return this.httpClient.get(`${this.baseUrl}`)
    //}
    fetchCommentss(id:number) :Observable<any> {
      console.log(id);
      return this.httpClient.get(`${this.baseUrl}/${id}`)
    }  
   as(id:number,value:string):Observable<any> {
   var a= this.httpClient.get(`${this.baseUrl}/${id}`)
    console.log(a);
    return a;
    let data = JSON.stringify(value);
    console.log("ad")
    //return this.httpClient.patch(`${this.baseUrl}/${id}`,value)
   
    
   } 
   
   patch1(id,a,title){
     let b=a;
  b.push(title);
    return this.httpClient.patch(`${this.baseUrl}/${id}`,{comments:a});
     console.log(id)
     console.log("hey aditya")
     console.log(a)
   }
setcomment(count : number)
{
  this.count=count;
}
getcomment()
{
  return this.count;
}
getspecificcomments(id:number):Observable <any>{
  return this.httpClient.get(`${this.baseUrl}/${id}`)

    
}


  }
     
