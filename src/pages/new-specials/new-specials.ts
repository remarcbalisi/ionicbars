import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-new-specials',
  templateUrl: 'new-specials.html',
})
export class NewSpecialsPage {

  spotname:string;
  specialsname:string;
  specialsdescription:string;
  starttime:string;
  closetime:string;
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
    console.log('ionViewDidLoad NewSpecialsPage');
  }

  setSpecial(){
      let special = {
          spotname : this.spotname,
          specialsname : this.specialsname,
          specialsdescription : this.specialsdescription,
          starttime : this.starttime,
          closetime : this.closetime
      }
      this.SpecialsDataArray.push(special);
      this.storage.set('specials', JSON.stringify(this.SpecialsDataArray));
  }

}
