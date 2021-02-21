import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.page.html',
  styleUrls: ['./trajet.page.scss'],
})
export class TrajetPage implements OnInit {
  stocks = [
    {
      id:1,
      name: "المخزن الرئيسي ",
      products: [
        {
          name: "زيتون",
          quantity: "100",
          piece_numbers:"10"
        },
        {
          name: "أرز",
          quantity: "1000",
          piece_numbers:"2"
        },
        {
          name: "فول",
          quantity: "500",
          piece_numbers:"3"
        }
      ]
    },
    {
      id:2,
      name: "مخزن الشرق",
      products: [
        {
          name: "دجاج",
          quantity: "180",
          piece_numbers:"5"
        },
        {
          name: "ابقار",
          quantity: "20",
          piece_numbers:"3"
        },
        {
          name: "علوش",
          quantity: "100",
          piece_numbers:"5"
        }
      ]
    },
    {
      id:3,
      name: "مخزن طرابلس",
      products: [
        {
          name: "أسماك",
          quantity: "450",
          piece_numbers:"3"
        },
        {
          name: "أسماك معلبة",
          quantity: "3000",
          piece_numbers:"2"
        },
        {
          name: "أسماك جودة عالية",
          quantity: "8",
          piece_numbers:"2"
        }
      ]
    },
    {
      id:4,
      name: "مخزن مصراتة",
      products: [
        {
          name: "حليب",
          quantity: "2000",
          piece_numbers:"5"
        },
        {
          name: "البان",
          quantity: "1000",
          piece_numbers:"3"
        },
        {
          name: "زبادي",
          quantity: "500",
          piece_numbers:"10"
        }
      ]
    }
  ];
  depot = {
    id: 0
  };
  products= [];
  depots= [];
  eventSource = [];
  viewTitle: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
      this.stocks.map((stock) => {

      stock.products.map((product) => {
          this.products.push(product);
        });
        console.log('------ depots -----', this.products);
        let depot ={
          id: stock.id,
          name: stock.name
        };
      this.depots.push(depot);
      });
      console.log('------ depots -----',this.depots);
  }

public onChangeProduct(searchedProduct: string) {
  console.log(searchedProduct);
  let list =[];
  this.products.map( (product) => {
    if(product.name === searchedProduct ) {
      console.log(searchedProduct);
      list.push(product);
    }
  });
  this.products = list;
}


public onSelectChange(id: number) {
    console.log(id);
    this.products=[];
    let stock =this.stocks[id-1];
    stock.products.map((product) => {
      this.products.push(product);
    });
  }
}
