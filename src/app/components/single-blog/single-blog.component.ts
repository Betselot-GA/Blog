import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent {
  @Input() blogImage: string = "";
  @Input() blogTitle: string = "";
  @Input() blogDescription: string = "";
}
