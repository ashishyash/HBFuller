import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 selectedCurrency:WritableSignal<string> = signal<string>('$');
  constructor() { }
  convertToBillion(number: number): string {
    const billion = 1e9; // 1 billion
    const result = number / billion;
    return result.toFixed(2) + 'B'; // Adjust the number of decimal places as needed
  }

  setCurrency(currency: string): void {
    this.selectedCurrency.update(() => currency);
  }

  getCurrency() { 
    return this.selectedCurrency;
  }

}
