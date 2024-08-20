import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

declare var anime: any;

@Component({
  selector: 'hagikirjutamine-component',
  templateUrl: './hagikirjutamine.component.html',
  styleUrls: ['./hagikirjutamine.component.scss']
})
export class HagikirjutamineComponent implements AfterViewInit {
  
 kkk: boolean;

hagike: string;

 hagitekst () {

  this.hagike = "tundub nii, et nüüd läheme kohtusse....";

  return this.hagike;

 }
  
 numberstr = 3;
 numbermks = 8;
 numberrnt = 0.2;
 numberefk = 9;
 numberln = 6;
 yldtext = 'Ettevõttel läheb hästi, soovitada probleemide lahendust otseselt ei ole. '
  strtext = '';
  mkstext = '';
  rnttext = '';
  efktext = '';
  lntext = '';

 tekstiloome3() {
  
  if (this.numberstr <= 0.51) {
    this.strtext = "Oluline on tegeleda bilansi struktuuri küsimustega. Võimalused on kas (a) omakapitali suurendamine või (b) kohustuste vähendamine või (c) mingi kombinatsioon nendest kahest. ";
    this.yldtext = 'vvEttevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
  }

  if (this.numbermks <= 0.51) {
    this.mkstext = "Oluline on tegeleda maksevõime suurendamisega.  Kui ettevõttel ei ole üldist probleeme laenudega või varadega üldises mõttes, siis on lahenduseks likviidsete varade osakaalu suurendamine. ";
    this.yldtext = 'vvEttevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
  }

  if (this.numberrnt <= 0.51) {
    this.rnttext = "Oluline on tegeleda rentaabluse suurendamisega.  Kuna ettevõtte varad toodavad liiga vähe väärtust tagasi, siis on peamiselt kaks võimalust olukorra parandamiseks: (a) suurendada käivet, ehk siis et tootvate varade kohta tuleks rohkem klienditellimusi või (b) vähendada varasid ja/või muuta nende olemust.  Võib olla aitab teist liiki varade kaasamine/kasutamine ettevõttel paremini toime tulla, rohkem väärtus luua. ";
    this.yldtext = 'vvEttevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
  }

  if (this.numberefk <= 0.51) {
    this.efktext = "Oluline on tegeleda sellega, kui efektiivselt ettevõte suudab oma varasid kasutada. Probleemne võib olla klientide poolt rahade laekumine, millest tulenevalt tuleb tegeleda sellega, et kliendid paremini tellimuste eest maksaksid.  Probleemne võib olla ka kauba- ja materjalivarude kasutamise efektiivsusega - lattu tootmine ei aita kaasa varade kasutamise efektiivsemaks muutmisele. ";
    this.yldtext = 'Ettevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
  }

  if (this.numberln <= 0.51) {
    this.lntext = "Oluline on tegeleda sellega, kui palju on ettevõte laene võtnud. Selgelt on tekkimas olukord, kus laenude osakaal on muutumas liiga suureks ning võib tekkida olukord, kus ettevõte ei tule oma laenukoormuse haldamisega enam toime. Võimalusel tuleks katsuda lühiajalisi laene refinantseerida pikaajalisemateks laenudeks. Vältida peaks proovima olukorda, kus igapäevaste toimetulekukulude katteks võetakse laenu. Samuti tuleks kaaluda võimalust omakapitali osakaalu suurendamiseks läbi täiendavate omavahendite kaasamise ettevõttesse. ";
    this.yldtext = 'Ettevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
  }

  return this.yldtext + this.strtext + this.mkstext + this.rnttext + this.efktext + this.lntext;
}










 ngAfterViewInit(): void {
  // Wrap every letter in a span
const textWrapper = document.querySelector('.an-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
.add({targets: '.an-1 .letter',
//scale: [4,1],
opacity: [0,1],
//duration: 950,
delay: (el:any, i:any) => 22*i

})

}

}