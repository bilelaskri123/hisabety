import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients = [
    {
      id: '1',
      clientName: 'أشرف أحمد',
      branch: 'الادارة الرئيسية',
      status: 'madin',
      credit: 100,
      factures : [
        {
          id: '1',
          type: ' صرف سند',
          date: '18/7/2020',
          price: 2344,
          status: 'madin',
          procurement : [
            { 
              id: '1',
              productName: 'أرز',
              type: 'كيلوغرام',
              quantity: 56,
              price: 123,

            },
            {
              id: '2',
              productName: 'سميد',
              type: 'كيلوغرام',
              quantity: 14,
              price: 14,

            },
            {
              id: '3',
              productName: 'بيبسي',
              type: 'زجاجة',
              quantity: 45,
              price: 48,

            }
          ]
        },
        {
          id: '2',
          type: 'فاتورة مشتريات',
          date: '18/08/2020',
          price: 2344,
          status: 'madin',
          procurement : [
            { 
              id: '1',
              productName: 'سميد',
              type: 'كيلوغرام',
              quantity: 245,
              price: 234,

            },
            {
              id: '2',
              productName: 'سميد',
              type: 'كيلوغرام',
              quantity: 134,
              price: 78,

            },
            {
              id: '3',
              productName: 'بيبسي',
              type: 'زجاجة',
              quantity: 199,
              price: 234,

            }
          ]
        }
      ]
    },
    {
      id: '2',
      clientName: 'محمود',
      branch: 'الادارة الرئيسية',
      status: 'da2en',
      credit: 1034,
      factures : [
        {
          id: '1',
          type: 'صرف سند',
          date: '14/4/2020',
          price: 2333,
          status: 'da2en',
          procurement : [
            { 
              id: '1',
              productName: 'سميد',
              type: 'كيلوغرام',
              quantity: 678,
              price: 567,

            },
            {
              id: '2',
              productName: 'بيبسي',
              type: 'زجاجة',
              quantity: 25,
              price: 25,

            },
            {
              id: '3',
              productName: 'سميد',
              type: 'كيلوغرام',
              quantity: 342,
              price: 234,

            }
          ]
        }
      ]
    },
    {
      id: '3',
      clientName: 'سيد',
      branch: 'الادارة الرئيسية',
      status: 'madin',
      credit: 344,
      factures : [
        {
          id: '1',
          type: 'صرف سند',
          date: '17/06/2020',
          price: 2344,
          status: 'madin',
          procurement : [
            { 
              id: '1',
              productName: 'بيبسي',
              type: 'زجاجة',
              quantity: 17,
              price: 13,

            },
            {
              id: '2',
              productName: 'بيبسي',
              type: 'زجاجة',
              quantity: 145,
              price: 134,

            },
            {
              id: '3',
              productName: 'سميد',
              type: 'كيلوغرام',
              quantity: 234,
              price: 123,

            }
          ]
        }
      ]
    }
  ]
  constructor() { }


  getClients() {
    return this.clients;
  }

  getClientById(id: string) {
    return this.clients.filter(client => client.id === id)
  }
}
