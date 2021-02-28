import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-facture-details',
  templateUrl: './facture-details.page.html',
  styleUrls: ['./facture-details.page.scss'],
})
export class FactureDetailsPage implements OnInit {

  public clienId;
  public client;
  public factures = [];
  public procurements =[];
  public factureId;
  constructor(private router: Router, private clientService: ClientsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.clienId = params.get('clientId');
      this.factureId = params.get('factureId');
      this.client = this.clientService.getClientById(this.clienId)[0];
      this.factures = this.client.factures;
      this.procurements = this.factures[0].procurement;
    })
  }

}
