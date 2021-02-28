import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreasuriesService } from '../services/treasuries.service';

@Component({
  selector: 'app-treasury-facture-detail',
  templateUrl: './treasury-facture-detail.page.html',
  styleUrls: ['./treasury-facture-detail.page.scss'],
})
export class TreasuryFactureDetailPage implements OnInit {

  private factureId: string
  private treasuryId: string
  public treasury;
  public facture;
  public procurements = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private treasuriesService: TreasuriesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.treasuryId = params.get('treasuryId');
      this.factureId = params.get('factureId');

      this.treasury = this.treasuriesService.getTreasuriesById(this.treasuryId)[0];
      this.facture = this.treasury.factures.filter(facture => facture.id === this.factureId)[0];
      this.procurements = this.facture.procurement;
      console.log(this.facture)
    })
  }

}
