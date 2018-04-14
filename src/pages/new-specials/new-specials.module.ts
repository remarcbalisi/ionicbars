import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSpecialsPage } from './new-specials';

@NgModule({
  declarations: [
    NewSpecialsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSpecialsPage),
  ],
})
export class NewSpecialsPageModule {}
