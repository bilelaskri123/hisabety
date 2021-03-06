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
    { title: 'الرئيسية', url: '/tabs', icon: 'assets/icon/home/home1.svg' },
    { title: 'الإعدادات', url: '/terms', icon: 'assets/icon/home/setting.svg' },
    { title: 'المخازن', url: '/about', icon: 'assets/icon/home/store.svg' },
    { title: 'الزبائن', url: '/privacy', icon: 'assets/icon/home/customer.svg' },
    { title: 'المصاريف', url: '/faq', icon: 'assets/icon/home/expense.svg' },
    { title: 'الخزينة', url: '/tabs', icon: 'assets/icon/home/treasury.svg' },
    { title: 'المبيعات', url: '/terms', icon: 'assets/icon/home/sales.svg' },
    { title: 'المشتريات', url: '/about', icon: 'assets/icon/home/purchase.svg' }
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
