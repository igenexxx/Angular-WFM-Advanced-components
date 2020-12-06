import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';

  @Output() addPost = new EventEmitter<Post>();

  @ViewChild('titleInput', { static: false }) titleRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  private clearFields() {
    this.title = '';
    this.text = '';
  }

  onAddPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      this.addPost.emit(post);

      console.log('New post: ', post);
      this.clearFields();
    }
  }

  onClickFocusButton() {
    this.titleRef.nativeElement.focus();
  }
}
