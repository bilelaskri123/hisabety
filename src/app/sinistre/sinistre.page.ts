import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-sinistre',
  templateUrl: './sinistre.page.html',
  styleUrls: ['./sinistre.page.scss'],
})
export class SinistrePage implements OnInit {

  contrats = [];

  constructor(private router: Router, private bankService: BankService) {}

  ngOnInit() {}

  showBankDetail(bankId: string) {
    this.router.navigate(['bank-detail', bankId]);
  }

}
