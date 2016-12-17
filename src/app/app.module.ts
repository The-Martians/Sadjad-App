import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CheckingPage } from '../pages/checking/checking';
import { WelcomePage } from '../pages/welcome/welcome';
import { Welcome2Page} from '../pages/welcome2/welcome2';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Setting } from '../pages/setting/setting';
import { SetStuPage } from '../pages/set-stu/set-stu';
import { SetLibPage } from '../pages/set-lib/set-lib';
import { SetSelfPage } from '../pages/set-self/set-self';

@NgModule({
  declarations: [
    MyApp,
    CheckingPage,
    WelcomePage,
    Welcome2Page,
    Page1,
    Page2,
    Setting,
    SetStuPage,
    SetLibPage,
    SetSelfPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CheckingPage,
    WelcomePage,
    Welcome2Page,
    Page1,
    Page2,
    Setting,
    SetStuPage,
    SetLibPage,
    SetSelfPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
