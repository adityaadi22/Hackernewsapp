import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.css']
})
export class CommentTreeComponent implements OnInit {
  @Input() commentTree;
  constructor() { }

  ngOnInit() {
   
  }

}
