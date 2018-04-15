import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { SpecialsListsPage } from '../specials-lists/specials-lists';

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

  path:string;

    constructor(public camera: Camera, public alertCtrl: AlertController, public picker: ImagePicker, public actionSheetCtrl: ActionSheetController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

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

        this.path = 'http://via.placeholder.com/150x150';

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Gallery',
          handler: () => {
            this.choosePicture();
          }
        },{
          text: 'Camera',
          handler: () => {
            this.takePicture();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

    showAlert(title, subtitle, btns) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: [btns]
        });
        alert.present();
    }

  choosePicture(){

    let options = {
        title: 'Select Picture',
        message: 'Select least 1 picture',
        maximumImagesCount: 1,
        outType: 0 // 0 path, 1 base64
    }

    this.picker.getPictures(options).then(results => {
        for( var i=0; i<results.length; i++ ){
            this.path = results[i];
        }
    }, err => {
        this.showAlert("Error", err, 'OK');
    });

  }

  takePicture(){

    let options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(url => {
        this.path = url;
    }, err => {
        this.showAlert("Error", err, 'OK');
    });

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
      this.navCtrl.push(SpecialsListsPage);
  }

}
