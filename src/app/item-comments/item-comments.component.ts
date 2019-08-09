import { Component, OnInit } from '@angular/core';
import { hackernewsApiService } from '../hackernews-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.css']
})
export class ItemCommentsComponent implements OnInit {
  sub: any;
  item ;
  _hackernewsApiService: any;
  
  
  constructor(   private _hackerNewsAPIService: hackernewsApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((param => {
      let itemID = +param['id'];
      this._hackernewsApiService.fetchComments(itemID).subscribe((data: any) => {
        this.item = data;
      }, error => console.log('Could not load item' + itemID));
    }));
      
    
    
  }
 

}
     
     