import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';
import { ContratService } from '../services/contrat.service';
@Component({
  selector: 'app-sinistre',
  templateUrl: './sinistre.page.html',
  styleUrls: ['./sinistre.page.scss'],
})
export class SinistrePage implements OnInit {

  contrats = [];

  constructor(private router: Router, private bankService: BankService, private contractService: ContratService) {}

  ngOnInit() {}

  showBankDetail(bankId: string) {
    this.router.navigate(['bank-detail', bankId]);
  }
  onLoadData(event: any) {

    this.contrats = this.contractService.getContracts();
  }
}
