import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {
  pagename: any;
  imgArray: string[];

  public myInput;
  public shouldShowCancel;

  constructor( private route: ActivatedRoute, private router: Router ) {
    this.imgArray = ['assets/imgs/camion2.jpeg']
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      this.pagename = params.name
    })
  }

  clinics(name) {
    var params = {
      name: name
    }
    this.router.navigate(['clinics', params]);
  }
  notification() {
    this.router.navigateByUrl('/notifications');
  }

  onInput(event) {

  }

  onCancel(event) {
    
  }
}
