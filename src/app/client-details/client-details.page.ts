import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {

  private clientId: any;
  public client;
  factures : [];
  constructor(private router: Router, private clientService: ClientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.clientId = params.get('id');
      this.client = this.clientService.getClientById(this.clientId)[0];
      this.factures = this.client.factures;
    })
  }

}
