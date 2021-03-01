import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories = [
    {
      id: '1',
      stockName: 'المخزن الرئيسي',
      categoryName: 'أرز 1 ك',
      categoryNumber: 3,
      quantity: 232,
      factures: [
        {
          id: '1',
          name: 'فاتورة مشتريات 1',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '22/12/2020'
        },
        {
          id: '2',
          name: 'فاتورة مشتريات 2',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '22/12/2020'
        },
        {
          id: '3',
          name: 'فاتورة مشتريات 3',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '22/12/2020'
        }
      ]
    },
    {
      id: '2',
      stockName: 'المخزن الرئيسي',
      categoryName: 'بيبسي 1 لتر',
      categoryNumber: 5,
      quantity: 546,
      factures: [
        {
          id: '1',
          name: 'فاتورة مشتريات 1',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '22/12/2020'
        },
        {
          id: '2',
          name: 'فاتورة مشتريات 5',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '22/12/2020'
        },
        {
          id: '3',
          name: 'فاتورة مشتريات 6',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '22/12/2020'
        }
      ]
    },
    {
      id: '3',
      stockName: 'مخزن الشرق',
      categoryName: 'برميلي',
      categoryNumber: 2,
      quantity: 122,
      factures: [
        {
          id: '1',
          name: 'فاتورة مشتريات 3',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '22/12/2020'
        },
        {
          id: '2',
          name: 'فاتورة مشتريات 7',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '22/12/2020'
        },
        {
          id: '3',
          name: 'فاتورة مشتريات 5',
          price: 10,
          quantity: 15,
          credit: 25,
          date: '23/11/2020'
        }
      ]
    },
    {
      id: '4',
      stockName: 'المخزن الرئيسي',
      categoryName: 'زيتون',
      categoryNumber: 7,
      quantity: 324,
      factures: [
        {
          id: '1',
          name: 'فاتورة مشتريات 1',
          price: 12,
          quantity: 14,
          credit: 25,
          date: '25/12/2020'
        },
        {
          id: '2',
          name: 'فاتورة مشتريات 5',
          price: 16,
          quantity: 15,
          credit: 34,
          date: '27/12/2020'
        },
        {
          id: '3',
          name: 'فاتورة مشتريات 6',
          price: 10,
          quantity: 15,
          credit: 23,
          date: '22/11/2020'
        }
      ]
    }
  ]
  constructor() { }

  getCategories() {
    return this.categories;
  }

  getCategoryById(categoryId: string) {
    return this.categories.filter(category => category.id === categoryId)[0]
  }
}
