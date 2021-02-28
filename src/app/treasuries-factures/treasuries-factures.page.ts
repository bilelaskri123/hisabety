import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreasuriesService } from '../services/treasuries.service';

@Component({
  selector: 'app-treasuries-factures',
  templateUrl: './treasuries-factures.page.html',
  styleUrls: ['./treasuries-factures.page.scss'],
})
export class TreasuriesFacturesPage implements OnInit {

  private treasuryId: string;
  public treasury;
  public factures = [];
  constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private treasuriesService: TreasuriesService) { }

  ngOnInit() {
     this.ActivatedRoute.paramMap.subscribe(params => {
      this.treasuryId = params.get('id');
      this.treasury = this.treasuriesService.getTreasuriesById(this.treasuryId)[0];
      this.factures = this.treasury.factures;
    })
  }

  showFactureDetail(factureId: string) {
    this.router.navigate(['treasury-facture-detail', this.treasuryId, {'factureId': factureId}])
  }

}
