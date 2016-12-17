import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { CheckingPage } from '../pages/checking/checking';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Setting } from '../pages/setting/setting';
import { WelcomePage } from '../pages/welcome/welcome';
import { Welcome2Page } from '../pages/welcome2/welcome2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CheckingPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'صفحه اول', component: Page1 },
      { title: 'صفحه دوم', component: Page2 },
      { title: 'تنظیمات', component: Setting },
      { title: 'خوش آمدید', component: WelcomePage },
      { title: 'نگران امنیت داده هایتان هستید', component: Welcome2Page }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
