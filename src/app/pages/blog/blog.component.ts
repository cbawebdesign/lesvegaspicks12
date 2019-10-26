import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';
import { Router } from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  courses: Entry<any>[] = [];


  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getCourses()
      .then(courses => this.courses = courses);
  }

  goToCourseDetailsPage(courseId) {
    this.router.navigate(['/course', courseId]);
  }
}