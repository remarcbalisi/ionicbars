import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewSpecialsPage } from '../new-specials/new-specials';
import { SpecialsListsPage } from '../specials-lists/specials-lists';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goNewSpecials(){
    this.navCtrl.push(NewSpecialsPage);
  }

  goSpecialsLists(){
    this.navCtrl.push(SpecialsListsPage);
  }

}
