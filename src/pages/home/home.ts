import { Component } from '@angular/core';
import { AlertController, NavParams, NavController, ToastController } from 'ionic-angular';
import { MasterPage } from "../master/master";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,private navParams: NavParams,
  private alertCtrl: AlertController,
  public toastCtrl: ToastController) {
   this.initializeItems();
  }
brightness;
pet;
gaming:string;
toppings:string;
items;

initializeItems() {
    this.items = [
      'Angular 1.x',
      'Angular 2',
      'ReactJS',
      'EmberJS',
      'Meteor',
      'Typescript',
      'Dart',
      'CoffeeScript'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

goMaster()
{
  this.navCtrl.push(MasterPage,{name:'Asun',age:28});

}

sendData(){
  console.log('Send OK');
}

presentToast() {
        let toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000
        });
        toast.present();
    }

// ionViewCanEnter(){

//   let account = this.navParams.get('account');
//   let password = this.navParams.get('password');

//   return account =="Asun" && password =="123"
// }

}
