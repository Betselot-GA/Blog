import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/blogs';
import { AllBlogs } from 'src/app/mock-data';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
 
  allBlogs: Blogs[] = [];
  
  constructor(private blogService:BlogService) { }
  
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs)=>this.allBlogs = blogs)  
  }
  

}