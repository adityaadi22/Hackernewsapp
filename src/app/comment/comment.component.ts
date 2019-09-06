import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentserviceService } from '../commentservice.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
 
 // collapse: boolean;
  itemID:any;
  title:any;
  description:any
   comments:any;
  data : any;
  postid: string[];
  sub: any;
  commentslist : any[];
 
  b:number;
  
 public dataval;
  newssid1: any;
  commentcounter: number;
  constructor(private comservice:CommentserviceService,
    private route: ActivatedRoute) { }

    //m1(a){
      //this.newssid=a;
      //this.comservice.fetchComments(this.newssid)
      //.subscribe(
        //data => {
          //alert("News Success");
          //this.postid=data as string[];
         // console.log(this.postid);
         //console.log(this.postid[0]);
      // this.dataarray.push(this.postid[1].body);
       // },
        //error => {
         // alert("ERROR");
       // });
   
    //  console.log(this.newssid);
     
   // }
   
   setId(id : any)
   {
     this.comservice.setId(id);
   }
   getcommentcounter()
   {
     this.commentcounter = this.comservice.getcomment();
     console.log(this.commentcounter);
   }
 
  fetchCommentsbasedonNewsId(a) {
     this.newssid1=a;
    // console.log("fgh"+this.newssid)
    this.setId(this.newssid1);
    
     this.comservice.fetchCommentss(this.newssid1).subscribe( data => {
       this.commentslist=data ;
     //  this.dataval = this.commentslist.id;
      // console.log(this.commentslist.id)
     },
     error => {
       alert("ERROR");
     });
   
   
     // TODO
     // Fetch comments from service 
     // commentslist
   
   }
   
   isEmptyComment() {
     return (this.commentslist && this.commentslist.length > 0);
   }





   
       ngOnInit() {  
        this.getcommentcounter();
      //  this.b = this.a;   
     // console.log("jhho");
     // console.log(this.b);
     // this.fetchCommentsbasedonNewsId(this.newssid);
          this.comservice.fetchComments().subscribe( data => {
        this.postid=data as string[];
       // console.log("abcd");
       //  console.log(this.postid);
        },
         error => {
           alert("ERROR");
         });

         

        //   console.log( "aaaa"+this.newssid);
          }
   // alert("News Success");
  //  this.m1(this.newssid);
  // 
  
  //this.sub = this.route.params.subscribe(params => {
    //let Newsid = +params['id'];
   // console.log(Newsid);
   
   //console.log(this.dataarray);
                                                         
                  //            });
  

        }