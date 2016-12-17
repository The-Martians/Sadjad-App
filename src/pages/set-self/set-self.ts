import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';
/*
  Generated class for the SetSelf page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-set-self',
  templateUrl: 'set-self.html'
})
export class SetSelfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetSelfPage');
  }

  skipAction(){
    localStorage.setItem("login","1");
    this.navCtrl.setRoot(Page1);
  }

  self = {
    username: '',
    password: ''
  };

  saveAction() {
    localStorage.setItem("self_username",this.self.username);
    localStorage.setItem("self_password",this.self.password);

    localStorage.setItem("login","1");

    this.navCtrl.setRoot(Page1);
  }
}
