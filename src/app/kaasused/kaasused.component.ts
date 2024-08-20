import { Component } from '@angular/core';

@Component({
  selector: 'kaasused-component',
  templateUrl: './kaasused.component.html',
  styleUrls: ['./kaasused.component.scss']
})
export class KaasusedComponent {
  currentIndex;

  sections = [
    {
      name: 'Eksabikaasa jälitab...',
      content:
        'Ebaseaduslik jälitustegevus on keelatud. Jälitaja saab vastutusele võtta, hea oleks leida mõningaid tõendeid, tunnistajate ütlusi vms., millega tõestada, ete eksabikaasa jälitab.',
      }, 
    {
      name: 'Töö osas pretensioon',
      content:
        'Tuleb analüüsida, mida lepiti täpselt kokku, kui töö telliti, mida pandi kirja, kuidas püstitati lähteülesanne. Lisaks vaadata, kuidas praak fikseeriti ja kas seda üldse õigesti hinnati, et midagi läks valesti.',
    },
    {
      name: 'Tööandja ei maksa',
      content:
        'Võimaluseks on töövaidluskomisjoni või kohtu kauda tööandjat mõjutada. Enne võiks veel vestelda advokaadi abil, siis tuleb ehk tööandjale mõistus pähe ja ei peagi kohtuuksi kulutama.'         
    },
    {
      name: 'Mulle ollakse raha võlgu',
      content:
        'Tuleb hinnata olukorda, kui tegemist on kroonilise võlgnikuga, kes on igale poole võlgu, siis tuleks tegutseda kiiresti. Võlg tuleb kohtu kaudu vormistada ja anda sissenõudmiseks täiturile. Vajadusel taotleda võlgniku pankroti väljakuulutamist.'
    },
    {
      name: 'Mu autole sõideti otsa',
      content: 
        'Kui sõideti otsa liikluses, siis peab otsasõitja andmed kirja panema, ühtlasi vormistama liiklusõnnetuse protokolli. Kui otsasõitja ei nõustu tunnistama süüd, tuleks kutsuda politsei. Kui autole sõideti otsa parklas, nii, et ise pealt ei näinud ja otsasõitja on ära läinud, siis tuleks asjaolud fikseerida ja teatada politseile.',
    },
    {
      name: 'Maksuameti nõue',
      content:
        'Nõude peale saab esitada vaide, seal on kindel tähtaeg, sellega ei saa venitada. Tuleb ühtlasi esitada pädev selgitus, miks nõue vale on.',
    },
    
    {
      name: 'Löömissüüdistus',
      content:
        'Tuleb alustada sellest, kuidas on löömine fikseeritud, kes nägi pealt, kas see jäi turvakaamerale jne. Võib olla on tegemist valesüüdistusega või hoopis oli tegemist enesekaitsega.',
    }
  ];





  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  
  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
    }
  }

}