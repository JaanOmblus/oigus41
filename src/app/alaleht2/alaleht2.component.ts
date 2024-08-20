import { Component } from '@angular/core';


@Component({
  selector: 'alaleht2-component',
  templateUrl: './alaleht2.component.html',
  styleUrls: ['./alaleht2.component.scss']
})
export class Alaleht2Component {
  
naabriinfo: string;
naabriinfoN: number;  
korjaNaabrid () {
  this.naabriinfo = localStorage.getItem("naabrid");
  this.naabriinfoN=Number(this.naabriinfo);
  return this.naabriinfoN;
  }

abieluinfo: string;
abieluinfoN: number;  
korjaAbielu () {
  this.abieluinfo = localStorage.getItem("abielu");
  this.abieluinfoN=Number(this.abieluinfo);
  return this.abieluinfoN;
  }

liiklusinfo: string;
liiklusinfoN: number;  
korjaLiiklus () {
  this.liiklusinfo = localStorage.getItem("liiklus");
  this.liiklusinfoN=Number(this.liiklusinfo);
  return this.liiklusinfoN;
  }

vargusinfo: string;
vargusinfoN: number;  
korjaVargus () {
  this.vargusinfo = localStorage.getItem("vargus");
  this.vargusinfoN=Number(this.vargusinfo);
  return this.vargusinfoN;
}
 
volginfo: string;
volginfoN: number;  
korjaVolg () {
  this.volginfo = localStorage.getItem("volg");
  this.volginfoN=Number(this.volginfo);
  return this.volginfoN;
}

parandusinfo: string;
parandusinfoN: number;  
korjaParandus () {
  this.parandusinfo = localStorage.getItem("parandus");
  this.parandusinfoN=Number(this.parandusinfo);
  return this.parandusinfoN;
}

arivaidlusinfo: string;
arivaidlusinfoN: number;  
korjaArivaidlus () {
  this.arivaidlusinfo = localStorage.getItem("arivaidlus");
  this.arivaidlusinfoN=Number(this.arivaidlusinfo);
  return this.arivaidlusinfoN;
}

maavaidlusinfo: string;
maavaidlusinfoN: number;  
korjaMaavaidlus () {
  this.maavaidlusinfo = localStorage.getItem("maavaidlus");
  this.maavaidlusinfoN=Number(this.maavaidlusinfo);
  return this.maavaidlusinfoN;
}


diagnoos: string;

oigusDiagnoos() {
  this.diagnoos = "Su õigusprobleem on pisut segane hetkel, et seda mõista. Tuleks advokaadiga natuke rääkida."

  if (this.naabriinfoN > this.abieluinfoN && this.naabriinfoN > this.liiklusinfoN && this.naabriinfoN > this.vargusinfoN && this.naabriinfoN > this.volginfoN && this.naabriinfoN > this.parandusinfoN && this.naabriinfoN > this.arivaidlusinfoN && this.naabriinfoN > this.maavaidlusinfoN) {
    this.diagnoos = "Tundub, et sinu peamiseks õigusprobleemiks on probleemid naabritega. Siin tuleks pisut advokaadiga aru pidada ja ilmselt esitada üks hagi."
  }

  else if (this.abieluinfoN > this.naabriinfoN && this.abieluinfoN > this.liiklusinfoN && this.abieluinfoN > this.vargusinfoN && this.abieluinfoN > this.volginfoN && this.abieluinfoN > this.parandusinfoN && this.abieluinfoN > this.arivaidlusinfoN && this.abieluinfoN > this.maavaidlusinfoN) {
    this.diagnoos = "Tundub, et sinu peamiseks õigusprobleemiks on probleemid tulenevalt abielust või kooselamisest kellegagi. Siin tuleb nüüd täpselt aru pidada, mida soovid saavutada, sest lähisuhete küsimuses on ennatlik hagi pisut tagasilööke anda võiv lahendus."
  }

  else if (this.liiklusinfoN > this.naabriinfoN && this.liiklusinfoN > this.abieluinfoN && this.liiklusinfoN > this.vargusinfoN && this.liiklusinfoN > this.volginfoN && this.liiklusinfoN > this.parandusinfoN && this.liiklusinfoN > this.arivaidlusinfoN && this.liiklusinfoN > this.maavaidlusinfoN) {
    this.diagnoos = "Jääb mulje, et sul on segadusi liikluses. See võib tunduda vähetähtis, kuid jätta varju sinu muudele tegemistele ja õigustele. Seetõttu peab ikkagi nende probleemidega tegelema."
  }

  else if (this.vargusinfoN > this.naabriinfoN && this.vargusinfoN > this.abieluinfoN && this.vargusinfoN > this.liiklusinfoN && this.vargusinfoN > this.volginfoN && this.vargusinfoN > this.parandusinfoN && this.vargusinfoN > this.arivaidlusinfoN && this.vargusinfoN > this.maavaidlusinfoN) {
    this.diagnoos = "Tundub, et on tegemist olukorraga, kus sinult on midagi varastatud või hoopiski oled sa endale võtnud midagi, mida keegi teine peab enda omaks ja nüüd räägib sellest, et sina oled varastanud. Ükskõik kumbat pidi asi on, tähtis on see, et vargusega võivad kaasneda ebameeldivad karistused ja varalised probleemid, mida varem selle teemaga korrektselt tegeleda, seda parem."
  }

  else if (this.volginfoN > this.naabriinfoN && this.volginfoN > this.abieluinfoN && this.volginfoN > this.liiklusinfoN && this.volginfoN > this.vargusinfoN && this.volginfoN > this.parandusinfoN && this.volginfoN > this.arivaidlusinfoN && this.volginfoN > this.maavaidlusinfoN) {
    this.diagnoos = "Sul on ilmselt võlgadega mingi teema õhus. Võlgu jäämist on väga palju, see on majanduses paratamatu. Kui sulle ollakse võlgu, siis tuleb astuda arukaid juriidilisi samme, et võlgnik teeks kõik võimaliku selleks, et sulle raha ära maksta, samas ei tohi võlgnikku panna juriidiliselt olukorda, kus ta ei saagi sulle maksta - mis sellisest juriidikast kasu oleks. Kui oled ise võlgu, siis tuleb teada oma õiguseid ja osata neid maksma panna - võlg on võlg, kuid võlgnik ei ole ei ori ega kuidagi alavääristamist taluma pidav isik.  Oma õiguste eest peab seisma."
  }

  else if (this.parandusinfoN > this.naabriinfoN && this.parandusinfoN > this.abieluinfoN && this.parandusinfoN > this.liiklusinfoN && this.parandusinfoN > this.vargusinfoN && this.parandusinfoN > this.volginfoN && this.parandusinfoN > this.arivaidlusinfoN && this.parandusinfoN > this.maavaidlusinfoN) {
    this.diagnoos = "Sul on ilmselt mingi probleem pärimisega. Kõige tõenäolisemalt vaidlus pärandi saamise või selle osade üle. Pärandamise juures on oluline pärandaja tahe, kuid on olemas ka konkreetsed seaduslikud raamid. Paljud pärimisprobleemid on ühed suured kaklused pärijate vahel, kui midagi sellist on päevakorral, siis ei tohi alluda emotsioonidele ega pärimiskaklusega kaasa minna, tuleb astuda asjalikke juriidilisi samme, et probleemid leiaksid lahenduse."
  }

  else if (this.arivaidlusinfoN > this.naabriinfoN && this.arivaidlusinfoN > this.abieluinfoN && this.arivaidlusinfoN > this.liiklusinfoN && this.arivaidlusinfoN > this.vargusinfoN && this.arivaidlusinfoN > this.volginfoN && this.arivaidlusinfoN > this.parandusinfoN && this.arivaidlusinfoN > this.maavaidlusinfoN) {
    this.diagnoos = "Oled seotud ärivaidlusega või kardad seda. Kui oled tegev äris ja natukenegi suurem tegija, siis on vaidlused paratamatud. Need lihtsalt on, need käivad kaasas. Sageli on ka nii, et äris otsitakse nõrku, kes esimeste nõudmiste esitamisel kohe nõudmistele alluvad ja enda vara käest ära annavad. Seega, kas sul on prasjagu ärivaidlus või mitte, kuid kui oled äris tegev, pead olema selleks ette valmistatud. Kui oled õiguslikult valmis vaidlusi lahendama, siis tavaliselt tekib neid ka vähem - juba kaugelt nähakse, et sinu kallale ei ole mõtet tulla."
  }

  else if (this.maavaidlusinfoN > this.naabriinfoN && this.maavaidlusinfoN > this.abieluinfoN && this.maavaidlusinfoN > this.liiklusinfoN && this.maavaidlusinfoN > this.vargusinfoN && this.maavaidlusinfoN > this.volginfoN && this.maavaidlusinfoN > this.parandusinfoN && this.maavaidlusinfoN > this.arivaidlusinfoN) {
    this.diagnoos = "Oled ilmselt maaomanik või kuidagi maadega seotud ja sul on vaidlus kaelas, mingi eriarvamus maaküsimuses kellegi teisega. Maade üle on Eestimaal alati vaieldud ja vaieldakse edasi. Kuna maa küljes ollakse väga hingega kinni, siis on seal ka väga palju pingeid ja need on pikki aastaid kestvad pinged. Mida täpsemalt on maa asjad paigas ja mida korrektsemalt on lahendatud maid puudutavad vaidlused, seda kindlamal vundamendil oma maa-asjadega seisad."
  }


  return this.diagnoos;
}

}