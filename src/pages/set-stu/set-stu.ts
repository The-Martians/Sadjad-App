import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SetLibPage } from '../set-lib/set-lib';

/*
  Generated class for the SetStu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-set-stu',
  templateUrl: 'set-stu.html'
})
export class SetStuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetStuPage');
  }

  skipAction(){
    this.navCtrl.push(SetLibPage);
  }

  stu = {
    username: '',
    password: ''
  };

  saveAction() {
    localStorage.setItem("stu_username",this.stu.username);
    localStorage.setItem("stu_password",this.stu.password);

    this.navCtrl.push(SetLibPage);
  }

}
