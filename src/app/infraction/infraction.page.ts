import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as $ from "jquery";
import { ClientsService } from "../services/clients.service";

@Component({
  selector: "app-infraction",
  templateUrl: "./infraction.page.html",
  styleUrls: ["./infraction.page.scss"],
})
export class InfractionPage implements OnInit {
  clients = [];
  isChecked: boolean
  madin = false;

  constructor(private router: Router, private clientService: ClientsService) {}

  ngOnInit() {
    this.clients = this.clientService.getClients()
  }

  handleSelected(event: any) {
    console.log(this.isChecked)
  }


  showDetail(clienId) {
    this.router.navigate(['client-details', clienId])
  }

  setPositiveBalance(event, status: number) {
    console.log(event.target.checked) ;

    if ( event.target.checked ) {
      console.log("Checked!");
      if(status == 1 ) {

        this.clients = this.clientService.getClients().map( (client) => {
              if(client.status === "da2en") {
                return client;
              }
        })

      }
   }else {
    this.clients = this.clientService.getClients();
   }
  }


  setNegativeBalance(event, status: number) {
    console.log(event.target.checked) ;

    if ( event.target.checked ) {
      console.log("Checked!");
      if(status == -1 ) {

        this.clients = this.clientService.getClients().map( (client) => {
              if(client.status === "madin") {
                return client;
              }
        })

      }
   } else {
    this.clients = this.clientService.getClients();
   }
  }


  public onChangeProduct(searchedProduct: string) {}
  public onSelectChange(id: number) {}
}
