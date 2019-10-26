import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { DescriptionComponent } from '../description/description.component';
import { GetstartComponent } from '../getstart/getstart.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';
import { SocialComponent } from '../social/social.component';
import { TeamComponent } from '../team/team.component';
import { TestiComponent } from '../testi/testi.component';
import { WorkComponent } from '../work/work.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ParticlesModule } from 'angular-particle';
import { PricingComponent } from '../pricing/pricing.component';
import {SharedModule} from '../shared.module';
import {PackageService} from "src/app/packages/package.service";
import {PackageDetailsComponent} from "src/app/packages/details.component";
import {PackageListComponent} from "src/app/packages/list.component";
import {BasicPackageComponent} from "src/app/packages/_basic.component";
import {RecommendPackageComponent} from "src/app/packages/_recommended.component";
import {PremiumPackageComponent} from "src/app/packages/_premium.component";


import { Index1Component } from './index1/index1.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { Index7Component } from './index7/index7.component';
import { Index8Component } from './index8/index8.component';
import { Index9Component } from './index9/index9.component';

import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [Index1Component, ServicesComponent, PricingComponent, AboutComponent, DescriptionComponent,
    GetstartComponent, BlogComponent, ContactComponent, SocialComponent, TeamComponent, TestiComponent,
    WorkComponent, Index2Component, Index3Component, Index4Component, Index5Component, Index6Component,
    Index7Component, Index8Component, Index9Component, BasicPackageComponent, RecommendPackageComponent, PremiumPackageComponent,PackageListComponent, PackageDetailsComponent  ],
  imports: [
    CommonModule,
    NgxYoutubePlayerModule.forRoot(),
    HomeRoutingModule,
    FormsModule,
    ParticlesModule,
    SharedModule
  ],
  providers: [
PackageService
  ],

})
export class HomeModule { }

