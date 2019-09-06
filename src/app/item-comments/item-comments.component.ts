import { Component, OnInit, Input } from '@angular/core';
import { CommentserviceService } from '../commentservice.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.css']
})

export class ItemCommentsComponent implements OnInit {
  
  // @Input() public newID ;
  // @Input() public datavalue ;
   
  // @Input() array;
     // console.log(nID);
     id2: any;
     
  sub: any;
          item ;
            just = [];
             items: any;
                abcdata: any;
                  defdata: any;
                     itemID: any;
  newID: any;
  abcd1: any;
  commentcounter:number;
  commentlistt: [];
 getId()
 {
   this.id2 = this.CommentserviceService.getId();
   console.log(this.id2);
 }

 

 addTodo(title, patchid:number)
 {
  const comment = {
     id: '11',
     author: '',
     des: '' 
   }
   this.just.push (title);
   console.log(title);
   this.CommentserviceService.as(patchid,title).subscribe((data: any) => {
    this.abcd1 = data,
    console.log(this.abcd1);
   let comments1=this.abcd1.comments;
   this.defdata=comments1;
   console.log("abc"+comments1);
  console.log(comments1.length);
    this.commentcounter=comments1.length;

  this.CommentserviceService.patch1(this.abcd1.id,comments1,title).subscribe((data:any)=>{
   
   });
   });  
  }

  getspecificcomments(id1: number){
this.CommentserviceService.getspecificcomments(id1).subscribe((data)=>{
  this.commentlistt=data.comments;
  console.log(this.commentlistt);
})
  } 
  constructor(private CommentserviceService: CommentserviceService,
    private route: ActivatedRoute) { }
 ngOnInit(
   
 ) {
  this.CommentserviceService.setcomment(this.commentcounter);
  this.getspecificcomments(this.id2);

   //console.log(this.datavalue);
this.getId();

   //this.sub = this.route.params.subscribe((param => {
    // let itemID = +param['id']; 
    //console.log(itemID);
     this.CommentserviceService.fetchCommentss(this.id2).subscribe(
       (data: any) => {
      this.abcdata = data;
       console.log(this.abcdata.Title);
       console.log(this.abcdata.comments);
    }, 
    error => console.log('Could not load item' + this. newID));
  
}   
}
     
     