import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    // { title: 'Home', url: '/home', icon: 'home' },
    { title: 'الرئيسية', url: '/tabs', icon: 'home-outline' },
    { title: 'أحكام وشروط', url: '/terms', icon: 'alert-circle-outline' },
    { title: 'معلومات عنا', url: '/about', icon: 'people' },
    { title: 'سياسة خاصة', url: '/privacy', icon: 'checkmark-done-circle-outline' },
    { title: 'التعليمات', url: '/faq', icon: 'flower' }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    public menuCtrl: MenuController,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigateByUrl('/login');
      this.translate.setDefaultLang('ar');
      // this.router.navigateByUrl('/tabs');

    });
  }
  login(){
    this.menuCtrl.toggle()
    this.router.navigateByUrl('/login');
  }
}
