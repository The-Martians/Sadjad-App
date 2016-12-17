import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

/*
  Generated class for the Welcome2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome2',
  templateUrl: 'welcome2.html'
})
export class Welcome2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome2Page');
  }

  prePage(){
    this.navCtrl.push(WelcomePage)
  }

}
