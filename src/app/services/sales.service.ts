import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private sales =[
    {
      id: '1',
      client: 'محمد أشرف',
      branch: 'المخزن الرئيسي',
      factureId: 123,
      date: '24/12/2020',
      credit: 233,
      remise: 0,
      procurements: [
        {
          id: '1',
          productName: 'سفن 1 لتر',
          quantity: 28,
          type: 'لتر',
          price: 67
        },
        {
          id: '2',
          productName: 'بيبسي 1 لتر',
          quantity: 13,
          type: 'لتر',
          price: 67
        },
        {
          id: '3',
          productName: 'أرز 1 كغ',
          quantity: 45,
          type: 'كغ',
          price: 24
        },
      ]
    },
    {
      id: '2',
      client: ' محمد صلاح',
      branch: 'مخزن طرابلس',
      factureId: 234,
      date: '24/12/2020',
      credit: 233,
      remise: 0,
      procurements: [
        {
          id: '1',
          productName: 'سفن 1 لتر',
          quantity: 19,
          type: 'لتر',
          price: 67
        },
        {
          id: '2',
          productName: 'بيبسي 1 لتر',
          quantity: 67,
          type: 'لتر',
          price: 67
        },
        {
          id: '3',
          productName: 'أرز 1 كغ',
          quantity: 12,
          type: 'كغ',
          price: 24
        },
      ]
    },
    {
      id: '3',
      client: 'محمد علي',
      branch: 'المخزن الرئيسي',
      factureId: 423,
      date: '24/12/2020',
      credit: 233,
      remise: 0,
      procurements: [
        {
          id: '1',
          productName: 'سفن 1 لتر',
          quantity: 25,
          type: 'لتر',
          price: 67
        },
        {
          id: '2',
          productName: 'بيبسي 1 لتر',
          quantity: 16,
          type: 'لتر',
          price: 67
        },
        {
          id: '3',
          productName: 'أرز 1 كغ',
          quantity: 23,
          type: 'كغ',
          price: 24
        },
      ]
    }
  ]
  constructor() { }

  getSales() {
    return this.sales;
  }

  getSalesById(saleId: string) {
    return this.sales.filter(sale => sale.id === saleId)[0];
  }
}
