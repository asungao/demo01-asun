import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, AlertController, LoadingController, ModalController } from 'ionic-angular';

/**
 * Generated class for the AsuntestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-asuntest',
  templateUrl: 'asuntest.html',
})
export class AsuntestPage {
  testCheckboxOpen: boolean;
  testRadioResult: any;
  testRadioOpen: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController) {
  }

  data: string;
  pepperoni:string;
  sausage:string;
  mushrooms:string;
  event : {timeStarts:string};

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsuntestPage');
  }


  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

 presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
  }

showPrompt() {
  let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            this.data = data.title;
            console.log(data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            this.data = data.title;
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

 showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: false
    });

     alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow',
      checked: false
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.data = data;
      }
    });
    alert.present();
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which City have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Toyko',
      value: 'Toyko',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Beijing',
      value: 'Beijing'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.data = data;
      }
    });
    alert.present();
  }



}
