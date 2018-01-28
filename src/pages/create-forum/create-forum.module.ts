import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CreateForumPage} from './create-forum';

@NgModule({
  declarations: [
    CreateForumPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateForumPage),
  ],
})
export class CreateForumPageModule {
}
