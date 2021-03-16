import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupData: any
  constructor(
    public navCtrl : NavController,

  ) {
    this.signupData = {}
  }

  ngOnInit() {
  }

  login() {
    this.navCtrl.pop()
  }
}
