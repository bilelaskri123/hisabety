import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.page.html',
  styleUrls: ['./trajet.page.scss'],
})
export class TrajetPage implements OnInit {

  public myInput;
  public shouldShowCancel;

  imgArray: string[];
  pagename: any;
  Types: any;
  myRating: number;

  constructor( private route: ActivatedRoute, private router: Router ) { 
    this.imgArray = ['assets/imgs/camion2.jpeg'];
    this.Types = 1;
  }

  ngOnInit() {
    this.myRating=4
    this.route.params.subscribe(params => {
      console.log(params)
      this.pagename = params.name
    })
  }

  rating(data){}

  booking(name){
    var params = {
      name : name
    }
    this.router.navigate(['book', params]);
  }
  
  myFunction(id) {
    console.log(id)
    var x = document.getElementById(id);
      $(document).ready(function () {
        $(x).slideToggle('slow');
      });
  }

  notification() {
    this.router.navigateByUrl('/notifications');
  }

  onInput(evenet) {
    console.log(evenet.target.value);
  }

  onCancel(event) {
    console.log(event.target.value);
  }

}
