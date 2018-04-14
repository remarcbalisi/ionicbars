import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialsListsPage } from './specials-lists';

@NgModule({
  declarations: [
    SpecialsListsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialsListsPage),
  ],
})
export class SpecialsListsPageModule {}
