import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-specials-lists',
  templateUrl: 'specials-lists.html',
})
export class SpecialsListsPage {

  SpecialsDataArray: any;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

      this.storage.get('specials').then((val) => {
        if( val != null ){
            let specials = JSON.parse(val);
            this.SpecialsDataArray = specials;
        }
        else{
            this.SpecialsDataArray = [];
        }
        console.log(JSON.parse(val));
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsListsPage');
  }

}
