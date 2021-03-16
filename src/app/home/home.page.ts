import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imgArray: any;
  public myInput;
  public shouldShowCancel;
  language: string = this.translateService.currentLang;

  constructor( private router: Router , private translateService: TranslateService) {
    this.imgArray = ['assets/imgs/camion2.jpeg']
  }

  ngOnInit() {

  }

  SubCat(name) {
    console.log(name)
    var params = {
      name : name
    }
    this.router.navigate(['sub-category', params]);
  }
  notification(){
    this.router.navigateByUrl('/notifications');
  }

  onInput(event) {

  }

  onCancel(event) {

  }
}
