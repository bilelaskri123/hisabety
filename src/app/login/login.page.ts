import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginData: any;
  language: string = this.translateService.currentLang;
  constructor(
    private router: Router,
    public alertCtrl: AlertController,
    private translateService: TranslateService
  ) {
    this.loginData = {}
  }

  ngOnInit() {
  }

  signup() {
    this.router.navigateByUrl('/signup');
  }
  home() {
    this.router.navigateByUrl('/tabs');
  }

  async forgotpassword() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password!',
      inputs: [
        {
          name: 'Email',
          type: 'text',
          placeholder: 'Enter Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.mailsent()
          }
        }
      ]
    });

    await alert.present();
  }

  async mailsent() {
    const alert = await this.alertCtrl.create({
      header: 'Mail Sent',
      subHeader: 'Please check your registered Email',
      message: 'We have sent link for reset password.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
