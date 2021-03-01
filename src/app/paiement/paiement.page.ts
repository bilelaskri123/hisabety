import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FactureDetailsPage } from "../facture-details/facture-details.page";
import { ModalController } from "@ionic/angular";
import * as $ from "jquery";
import { SalesService } from "../services/sales.service";

@Component({
  selector: "app-paiement",
  templateUrl: "./paiement.page.html",
  styleUrls: ["./paiement.page.scss"],
})
export class PaiementPage implements OnInit {

  sales = [];
  salesFiltered = [];
  branches = ['المخزن الرئيسي', "مخزن الشرق", "مخزن طرابلس", "مخزن مصراتة"];
  constructor(private router: Router, private salesService: SalesService) {}

  ngOnInit() {
    this.sales = this.salesService.getSales();
    this.salesFiltered = this.sales;
  }



  showSalesDetail(saleId: string) {
    this.router.navigate(['/sale-detail', saleId])
  }

  onSelectChange(value: string) {
    this.salesFiltered = this.sales;
    this.salesFiltered = this.salesFiltered.filter(sale => sale.branch === value);
  }
}
