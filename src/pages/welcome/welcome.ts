import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Welcome2Page } from '../welcome2/welcome2';

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',

})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  nextPage() {
    this.navCtrl.push(Welcome2Page);
  }
}
