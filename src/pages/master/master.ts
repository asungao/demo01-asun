import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from "../list/list";

/**
 * Generated class for the MasterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-master',
  templateUrl: 'master.html',
})
export class MasterPage {
  name: string;
  age:  any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterPage');
    this.name= this.navParams.get('name');
    this.age = this.navParams.get('age');
  }

 goHome()
 {
   this.navCtrl.pop();
 }

 setRootPage(){
   this.navCtrl.setRoot(ListPage);
 }

}
