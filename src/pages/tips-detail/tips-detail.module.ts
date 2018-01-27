import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipsDetailPage } from './tips-detail';

@NgModule({
  declarations: [
    TipsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TipsDetailPage),
  ],
})
export class TipsDetailPageModule {}
