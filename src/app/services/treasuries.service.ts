import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreasuriesService {

  private treasuries = [
    {
      id: '1',
      type: 'الخزينة الرئيسية',
      status: false,
      credit: 100,
      factures : [
        {
          id: '1',
          type: 'رصيد منقول',
          date: '18/07/2020',
          price: 234,
          positive: 2344,
          negative: 123,
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
          type: 'إيصال قبض',
          date: '18/08/2020',
          price: 2344,
          positive: 2344,
          negative: 123,
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
        },
        {
          id: '3',
          type: 'فاتورة نقدية',
          date: '18/08/2020',
          price: 2344,
          positive: 2344,
          negative: 123,
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
    }
  ];
  constructor() { }

  getTreasuries() {
    return this.treasuries;
  }

  getTreasuriesById(id: string) {
    return this.treasuries.filter(treasury => treasury.id === id)
  }
}
