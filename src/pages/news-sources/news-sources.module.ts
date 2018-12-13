import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsSourcesPage } from './news-sources';

@NgModule({
  declarations: [
    NewsSourcesPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsSourcesPage),
  ],
})
export class NewsSourcesPageModule {}
