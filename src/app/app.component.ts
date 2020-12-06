import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Первый пост',
      text: 'Some text about first post',
      id: 1
    },
    {
      title: 'Второй пост',
      text: 'Some text about second post! Wow!',
      id: 1
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      console.log('Timeout');
      this.posts = [{
        ...this.posts[0],
        title: 'Changed'
      }, ...this.posts.slice(1)];
      // this.posts[0].title = 'Changed';
    }, 3000);
  }

  onAddPost($event: Post) {
    this.posts.unshift($event);
  }

  onRemovePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
