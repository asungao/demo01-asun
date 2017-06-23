import { Component } from '@angular/core';
import { AlertController } from "ionic-angular";


@Component({
  templateUrl: 'template.html'
})
export class ThumbnailPage {

 constructor(public alertCtrl: AlertController) {
  }

  showAlert() {
    console.log("click");
    let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
  }

 }
