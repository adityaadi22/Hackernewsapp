import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HNComponent } from './hn/hn.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';
import  { hackernewsApiService } from './hackernews-api.service';

import { DomainPipe } from './domain.pipe';

import { ItemCommentsComponent } from './item-comments/item-comments.component';

import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HNComponent,
    LoginComponent,
    StoriesComponent,
    ItemComponent,
    
    DomainPipe,
    
    ItemCommentsComponent,
    
    
    
    CommentTreeComponent,
    
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers:  [hackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
