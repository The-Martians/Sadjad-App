import { Component } from '@angular/core';

//import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class Setting {
  icons: string[];
  items: Array<{title: string, pass: string, user: string , login:boolean ,input:string}>;
  ///items={title:"salam",input:"شماره دانشجویی",login:false,user:"-1",pass:"-1";};
}
