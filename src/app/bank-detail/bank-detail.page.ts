import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../services/bank.service';
import { ContratService } from '../services/contrat.service';

@Component({
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.page.html',
  styleUrls: ['./bank-detail.page.scss'],
})
export class BankDetailPage implements OnInit {

  public bank;
  private bankId: string;
  public contrats = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contratService: ContratService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.bankId = params.get('bankId');
      this.bank = this.contratService.getContractById(this.bankId)[0];
    })
  }

  showContrat() {
      this.contrats = this.bank.contrats;
  }

}
