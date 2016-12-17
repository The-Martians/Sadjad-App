import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';

import {Page1} from "../page1/page1";
import { WelcomePage } from "../welcome/welcome";

/*
  Generated class for the Checking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-checking',
  templateUrl: 'checking.html'
})

export class CheckingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private alertCtrl: AlertController) {}

  isFirst() {
    var login = localStorage.getItem('login');
    if(login && login == "1"){
      return true;
    }
    else if(login && login == "0"){
      return false;
    }
    else{
      return false;
    }
  }

  setFirst() {
    localStorage .setItem('login',"0");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckingPage');
    if(this.isFirst()){
      this.navCtrl.setRoot(Page1);
    }
    else{
      this.setFirst();
      this.navCtrl.push(WelcomePage);
    }
  }

}
