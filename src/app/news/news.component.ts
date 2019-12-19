import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/contentful.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  product: Entry<any>;
  categories: Entry<any>[];
  productsForCategories: {} = {};
  constructor(
    private ContentfulService: ContentfulService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
    .pipe(switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug'))))
    .subscribe(product => this.product = product);
    this.ContentfulService.getCategories()
    .then(categories => {
      this.categories = categories;

      return Promise.all(this.categories.map(
        category => this.ContentfulService.getProducts({
          'fields.categories.sys.id': category.sys.id
        })
      ))
    })
    .then(productListings => {
      this.categories.forEach((cat, i) => {
        this.productsForCategories[cat.sys.id] = productListings[i];
      });
    })
  }
}
