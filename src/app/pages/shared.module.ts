
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MdToHtmlPipe } from '../md-to-html.pipe';
import { ContentfulService } from '../contentful.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [
    MdToHtmlPipe, 
  ],
  providers: [
    ContentfulService,
  ],
  exports: [
MdToHtmlPipe
  ]
})
export class SharedModule {}
