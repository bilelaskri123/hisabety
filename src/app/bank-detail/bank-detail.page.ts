import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.page.html',
  styleUrls: ['./bank-detail.page.scss'],
})
export class BankDetailPage implements OnInit {

  public bank;
  private bankId: string;
  public factures;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bankService: BankService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.bankId = params.get('bankId');
      this.bank = this.bankService.getBankById(this.bankId)[0];
      this.factures = this.bank.factures;
    })
  }

}
