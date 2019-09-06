export class NewsFeed {
id:[];
title:string;
comments: Comment[];
description:string;   
}


export class Comment {
    id: string;
    author:string;
    time: any;
    description:string;   
    }
