import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FactureDetailsPage } from "../facture-details/facture-details.page";
import { ModalController } from "@ionic/angular";
import * as $ from "jquery";

@Component({
  selector: "app-paiement",
  templateUrl: "./paiement.page.html",
  styleUrls: ["./paiement.page.scss"],
})
export class PaiementPage implements OnInit {
  stocks = [
    {
      id: 1,
      name: "المخزن الرئيسي ",
      products: [
        {
          facture_number: "123",
          facture_client: "محمد أشرف ",
          quantity: "21/2/2021",
          piece_numbers: "10",
        },
        {
          facture_number: "125",
          facture_client: "محمد علي ",
          quantity: "21/2/2021",
          piece_numbers: "2",
        },
        {
          facture_number: "156",
          facture_client: "علي  ",
          quantity: "21/2/2021",
          piece_numbers: "3",
        },
      ],
    },
    {
      id: 2,
      name: "مخزن الشرق",
      products: [
        {
          facture_number: "145",
          facture_client: " أشرف ",
          quantity: "21/2/2021",
          piece_numbers: "5",
        },
        {
          facture_number: "489",
          facture_client: "محمد  ",
          quantity: "21/2/2021",
          piece_numbers: "3",
        },
        {
          facture_number: "230",
          facture_client: "محمد صلاح  ",
          quantity: "21/2/2021",
          piece_numbers: "5",
        },
      ],
    },
    {
      id: 3,
      name: "مخزن طرابلس",
      products: [
        {
          facture_number: "152",
          facture_client: "محمد أشرف ",
          quantity: "21/2/2021",
          piece_numbers: "3",
        },
        {
          facture_number: "123",
          facture_client: " صلاح  ",
          quantity: "21/2/2021",
          piece_numbers: "2",
        },
        {
          facture_number: "485",
          facture_client: "محمد صلاح  ",
          quantity: "21/2/2021",
          piece_numbers: "2",
        },
      ],
    },
    {
      id: 4,
      name: "مخزن مصراتة",
      products: [
        {
          facture_number: "452",
          facture_client: "محمد أشرف ",
          quantity: "21/2/2021",
          piece_numbers: "5",
        },
        {
          facture_number: "496",
          facture_client: "محمد أشرف ",
          quantity: "21/2/2021",
          piece_numbers: "3",
        },
        {
          facture_number: "785",
          facture_client: "محمد أشرف ",
          quantity: "21/2/2021",
          piece_numbers: "10",
        },
      ],
    },
  ];
  depot = {
    id: 0,
  };
  products = [];
  depots = [];
  eventSource = [];
  viewTitle: string;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.stocks.map((stock) => {
      stock.products.map((product) => {
        this.products.push(product);
      });
      console.log("------ depots -----", this.products);
      let depot = {
        id: stock.id,
        facture_number: stock.name,
      };
      this.depots.push(depot);
    });
    console.log("------ depots -----", this.depots);
  }

  public onChangeProduct(searchedProduct: string) {
    console.log(searchedProduct);
    let list = [];
    this.products.map((product) => {
      if (product.name === searchedProduct) {
        console.log(searchedProduct);
        list.push(product);
      }
    });
    this.products = list;
  }

  public onSelectChange(id: number) {
    console.log(id);
    this.products = [];
    let stock = this.stocks[id - 1];
    stock.products.map((product) => {
      this.products.push(product);
    });
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: FactureDetailsPage,
  //     swipeToClose: true,
  //     cssClass: "my-custom-class",
  //   });
  //   return await modal.present();
  // }
}
