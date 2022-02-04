import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent implements OnInit {
  constructor() {}

  amount: number = 0;
  resultMessage: string = '';

  currencies = [
    {
      currencyName: 'Türk Lirası',
      currencyCode: 'TRY',
      factor: 1,
    },
    {
      currencyName: 'Amerikan Doları',
      currencyCode: 'USD',
      factor: 0.074,
    },
    {
      currencyName: 'Euro',
      currencyCode: 'EUR',
      factor: 0.064,
    },
    {
      currencyName: 'İngiliz Sterlini',
      currencyCode: 'GBP',
      factor: 0.054,
    },
  ];

  currentCurrency: string = 'TRY';
  targetCurrency: string = 'USD';

  ngOnInit(): void {}

  convertCurrency() {
    if (!isNaN(this.amount)) {
      let currentFactor = this.findCurrencyFactor(this.currentCurrency);
      let targetFactor = this.findCurrencyFactor(this.targetCurrency);

      if (targetFactor != undefined && currentFactor != undefined) {
        let convertedAmount = (
          (this.amount * currentFactor) /
          targetFactor
        ).toFixed(2);
        this.resultMessage = `${this.amount} ${this.currentCurrency} = ${convertedAmount} ${this.targetCurrency} `;
      }
    } else {
      this.resultMessage = 'Hata, sayı girmelisiniz!';
    }
  }

  findCurrencyFactor(targetCode: string) {
    let foundItem = this.currencies.find(
      (item) => item.currencyCode == targetCode
    );
    if (foundItem) {
      return foundItem.factor;
    } else {
      console.log('Error');
      return undefined;
    }
  }
}
