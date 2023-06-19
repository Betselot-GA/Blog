import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Blogs } from '../blogs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':"application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
  
export class BlogService {
  private url = "http://localhost:5000/Blogs"
  constructor(private http: HttpClient) { }
  
  getBlogs(): Observable<Blogs[]>{
    return this.http.get<Blogs[]>(this.url);
  }


}
