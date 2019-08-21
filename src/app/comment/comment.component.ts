import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentserviceService } from '../commentservice.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment;
  collapse: boolean;
  id: any;
  name:any;
   email:any;
   body:any;
   comments:any;
  postid: any;
  dataarray : any[];
  data : any;
  
  //typeSub: any;
  //pageSub: any;
 // pageNum: number;
 // comservice: any;
 // CommentserviceService: any;

  
  

  constructor(private comservice:CommentserviceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
   // console.log("jhho");
   // this.collapse = false;
   // this.id =this.route.data.subscribe(data => this.comment = (data as any).comments);

  // this.postid = this.route.params.subscribe(params => {this.postid = +params['id'] ;
  

    this.comservice.fetchComments()
    .subscribe(
      data => {
       // alert("News Success");
        this.postid=data as string[];
       // console.log(this.postid[1].body);
       // console.log(data);
      // this.dataarray.push(this.postid[1].body);
      },
      error => {
        alert("ERROR");
      });
   //console.log(this.dataarray);
                                                         
                  //            });
  }

}

