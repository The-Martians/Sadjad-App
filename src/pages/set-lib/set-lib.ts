import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SetSelfPage } from '../set-self/set-self';
/*
  Generated class for the SetLib page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-set-lib',
  templateUrl: 'set-lib.html'
})
export class SetLibPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetLibPage');
  }

  skipAction(){
    this.navCtrl.push(SetSelfPage);
  }

  lib = {
    username: '',
    password: ''
  };

  saveAction() {
    localStorage.setItem("lib_username",this.lib.username);
    localStorage.setItem("lib_password",this.lib.password);

    this.navCtrl.push(SetSelfPage);
  }

}
