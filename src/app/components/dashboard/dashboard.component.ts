import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
 
  }


  
}