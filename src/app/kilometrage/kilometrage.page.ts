import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TreasuriesService } from '../services/treasuries.service';

@Component({
  selector: 'app-kilometrage',
  templateUrl: './kilometrage.page.html',
  styleUrls: ['./kilometrage.page.scss'],
})
export class KilometragePage implements OnInit {

  treasuries = [];



  constructor(private router: Router, private treasuriesService: TreasuriesService) {}

  ngOnInit() {
    this.treasuries = this.treasuriesService.getTreasuries();
  }

  showDetail(id: string) {
    this.router.navigate(['/treasuries-factures', id])
  }





}
