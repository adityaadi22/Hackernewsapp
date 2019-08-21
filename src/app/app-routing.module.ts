import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HNComponent } from './hn/hn.component';
import { LoginComponent } from './login/login.component';

import { StoriesComponent } from './stories/stories.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  
   
  {path:'login',component:LoginComponent},

  //{path: item/: id'                                     },

  
    {path: '', redirectTo: 'news/1', pathMatch : 'full'},
   // {path: '', component:HNComponent},
    {path: 'news/:page', component: StoriesComponent, data: {storiesType: 'news'}},
    {path: 'newest/:page', component: StoriesComponent, data: {storiesType: 'newest'}},
    {path: 'show/:page', component: StoriesComponent, data: {storiesType: 'show'}},
    {path: 'ask/:page', component: StoriesComponent, data: {storiesType: 'ask'}},
    {path: 'jobs/:page', component: StoriesComponent, data: {storiesType: 'jobs'}},
    {path: 'comments', component: CommentComponent, data: {CommentType: 'comments'}},
    {path: 'item/:id', component: ItemCommentsComponent}
  ];
  

  export const routing = RouterModule.forRoot(routes);






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
