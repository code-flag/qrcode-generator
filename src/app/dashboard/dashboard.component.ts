import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";
  public totalQrCode: any = 10;
  public qrCodeSize: any = 100;
  public isGenerateQrCode: boolean = false;
  public totalLuckyNumber: number = 5;
  public qrCodeDataArray: any[] = [];
  public customUrl: any = "";
  public customDownloadFilename = "new-qrcode";
  public luckyURL: any = {
   "1": "https://www.jumia.com.ng/generic-f9-fingerprint-touch-bluetooth-earphone-earbuds-power-2200mah-73249119.html",
    '2': 'https://www.jumia.com.ng/titan-beige-dial-golden-stainless-steel-strap-watch-90158602.html',
    '3': 'https://www.jumia.com.ng/keep-moving-first-class-elegant-non-fading-ladies-gold-wristwatch-set-for-boss-chic-82095396.html',
    '4': 'https://www.jumia.com.ng/fashion-2022-mens-casual-sci-fi-warrior-running-sneakers-blackgreen-91374917.html',
    '5': 'https://www.jumia.com.ng/apple-iphone-xs-max-256gb-4gb-space-gray-6.5-case-screen-guide-204777788.html',
  }

  public assignedQrCode: any = [
    "https://www.jumia.com.ng/generic-f9-fingerprint-touch-bluetooth-earphone-earbuds-power-2200mah-73249119.html",
    'https://www.jumia.com.ng/titan-beige-dial-golden-stainless-steel-strap-watch-90158602.html',
    'https://www.jumia.com.ng/keep-moving-first-class-elegant-non-fading-ladies-gold-wristwatch-set-for-boss-chic-82095396.html',
    'https://www.jumia.com.ng/fashion-2022-mens-casual-sci-fi-warrior-running-sneakers-blackgreen-91374917.html',
    'https://www.jumia.com.ng/apple-iphone-xs-max-256gb-4gb-space-gray-6.5-case-screen-guide-204777788.html',
  
  ]
  public menu: number = 0;


  constructor() {}

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  generateQrcode() {

    let j = 1; let url = '';

    const luckyNumber: any[] = this.generateRandomNumbers(1, this.totalQrCode, this.totalLuckyNumber);
    console.log('lucky numbers', luckyNumber);
    
    this.qrCodeDataArray = [];
    for(let i = 0; i< this.totalQrCode; i++){
      if (luckyNumber.includes(i)) {
       url = this.luckyURL[j.toString()];
       console.log('url', url);
       j++;
      }else {
        url = "www.middey.com/" + (Date.now() + i) ;
      }

      this.qrCodeDataArray.push(url);
    }
    this.isGenerateQrCode = true;
  }

   generateRandomNumbers(min: number, max: number, totalRandNumber: number) {
    const randoms = []

    for (let i = 0; i < totalRandNumber; i++) {
        randoms.push(Math.floor(Math.random() * (max - min) + min))
    }

    return randoms
}
printPage() {
  window.print();
}
// Later call it like so

generatePassword = (passwordLength: number) => {
  const defaultCharacters = 'abcdefghijklmnopqrstuvwxyz'
  const characters = {
      uppercase: defaultCharacters.toUpperCase(),
      numbers: '0123456789',
      symbols: '~!@-#$'
  }

  const characterList = [
      defaultCharacters,
      characters.uppercase,
      characters.numbers,
      characters.symbols
  ].join('')

  return Array.from({ length: passwordLength }, () => Math.floor(Math.random() * characterList.length))
      .map(number => characterList[number])
      .join('')
}

activeMenu(menu: number) {
  this.menu = menu;
}

ngOnInit(): void {
  this.activeMenu(0);
}

public getCustomUrl = (event: any) => {
   this.customUrl = event.target.value;
}


}
