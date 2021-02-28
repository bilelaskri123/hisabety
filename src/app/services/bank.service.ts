import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private banks = [
    {
      id: "1",
      bankName: "بنك انبي",
      price: 15544,
      type: "دينار ليبي",
      date: '17/07/2020',
      factures: [
        {
          id: "1",
          positive: 675,
          negative: 4567,
          price: 324,
        },
        {
          id: "2",
          positive: 5673,
          negative: 233,
          price: 256,
        },
        {
          id: "3",
          positive: 234,
          negative: 786,
          price: 987,
        },
      ],
    },
    {
      id: "2",
      bankName: "بنك مصر",
      type: "دينار ليبي",
      price: 2344,
      date: '22/08/2020',
      factures: [
        {
          id: "1",
          positive: 1324,
          negative: 1374,
          price: 56,
        },
        {
          id: "2",
          positive: 1324,
          negative: 1374,
          price: 56,
        },
        {
          id: "3",
          positive: 324,
          negative: 6889,
          price: 4356,
        },
      ],
    },
  ];
  constructor() {}

  getBanks() {
    return this.banks;
  }

  getBankById(id: string) {
    return this.banks.filter((bank) => bank.id === id);
  }
}
