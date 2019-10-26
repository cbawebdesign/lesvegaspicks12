import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  

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