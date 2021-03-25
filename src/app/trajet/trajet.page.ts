import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as $ from "jquery";
import { CategoriesService } from "../services/categories.service";

@Component({
  selector: "app-trajet",
  templateUrl: "./trajet.page.html",
  styleUrls: ["./trajet.page.scss"],
})
export class TrajetPage implements OnInit {
  public categories = [];
  stockSName = ["المخزن الرئيسي", "مخزن الشرق", "مخزن طرابلس", "مخزن مصراتة"];
  public listFiltred = [];
  public displayFilter=false;
  public clicked=false;
  public output_clicked=false;
  public input_clicked=false;
  public details_clicked=false;

  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.listFiltred = this.categories;
  }

  onChangeProduct(value) {}

  onSelectChange(value: string) {
    this.listFiltred = this.categories;
    this.listFiltred = this.listFiltred.filter(
      (category) => category.stockName === value
    );
  }
  displayFilters(event: any){
    console.log(event);
    this.displayFilter= !this.displayFilter;
  }
  getStores(event: any) {
    this.clicked = true;
  }
  getStoresInput(event: any) {
    this.clicked = false;
    this.input_clicked = !this.input_clicked;
  }
  getStoresOutput(event: any) {
    this.clicked = false;
    this.output_clicked = !this.output_clicked;
  }
  getStoresDetails(event: any) {
    this.clicked = false;
    this.details_clicked = !this.details_clicked;
  }
}
