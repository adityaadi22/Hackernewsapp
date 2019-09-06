import { Component,Input, OnInit } from '@angular/core';
import { CommentserviceService } from '../commentservice.service';
//import { hackernewsApiService } from '../hackernews-api.service';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  item;
  constructor(private CommentserviceService: CommentserviceService) { }

  ngOnInit() {
    
  }


}