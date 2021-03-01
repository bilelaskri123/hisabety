import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.page.html',
  styleUrls: ['./sale-detail.page.scss'],
})
export class SaleDetailPage implements OnInit {

  private saleId: string
  public sale;
  public procurements = []
  constructor(private activatedRoute: ActivatedRoute, private salesService: SalesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.saleId = params.get('saleId');
      this.sale = this.salesService.getSalesById(this.saleId);
      this.procurements = this.sale.procurements;
      console.log(this.sale);
    })
  }

}
