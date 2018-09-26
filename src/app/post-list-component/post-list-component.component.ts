import { Component, Input,OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postloveIts : number;
  @Input() postDate : Date;

  constructor() { }

  ngOnInit() {
  }
  
  onLoveIt(){

    this.postloveIts ++;
    console.log(this.postloveIts);

  }

  onDontLoveIt(){

    this.postloveIts --;
    console.log(this.postloveIts);
  }

  getState(){
    if(this.postloveIts < 0 ){
       return 'red'
    } else if (this.postloveIts > 0)
       return 'green'
  }
 

}
