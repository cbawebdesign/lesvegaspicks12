import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  

  mypicks: Entry<any>[] = [];
  courses: Entry<any>[] = [];
  constructor(public router: Router, private contentfulService: ContentfulService) { }

  

  ngOnInit() {
    this.contentfulService.getMypicks()
      .then(mypicks => this.mypicks = mypicks);
  }



  goToMypickDetailsPage(mypickId) {
    this.router.navigate(['/mypick', mypickId]);
  }


}