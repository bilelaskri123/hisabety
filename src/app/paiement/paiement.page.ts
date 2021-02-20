import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as $ from "jquery";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
})
export class PaiementPage implements OnInit {

 public date = new Date().toDateString();

  constructor(private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
   
  }

}
