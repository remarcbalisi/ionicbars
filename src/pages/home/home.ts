import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewSpecialsPage} from '../new-specials/new-specials';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goNewSpecials(){
    console.log("click");
    this.navCtrl.push(NewSpecialsPage);
  }

}
