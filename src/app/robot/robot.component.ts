import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss'],
})
export class RobotComponent implements OnInit {

hovered: boolean;


  setMyStyles() {
    let styles = {
      'background-color': this.hovered ? 'red' : 'blue',
      'font-weight': this.hovered ? 'bold' : 'normal',
      'border-radius': '50%',
      'width': '400px',
      'height': '400px',
      'transform': this.hovered?'perspective(1000px) translateZ(10px)':'perspective(1000px) translateZ(0px)'
      // 'transform':this.hovered? ' perspective(30px) ' +'scale3d(2, 0.7, 0.2)' + 'translateZ(100px)':''
     
    };
    return styles;
  }
  @HostListener('mouseover')
  public onChange(): any {
    this.hovered = !this.hovered;
  }

  //võlg, pärandus, ärivaidlus, maavaidlus

  arvamus = '';
  ukssisend: any;
  uksnumber: number;
  uusuksnumber: any;
  robotloome() {
    this.arvamus = 'Naabritega võib kaasneda vara rikkumine või õiguste piiramine, siinkohal on eelkõige aluseks võlaõigusseadus, kuid ka üldiselt tsiviilsuhteid reguleerivad õigusaktid.';
    this.ukssisend = localStorage.setItem("naabrid", '1');
    //alert("sdf")
    return this.arvamus;
  }
  
  arvamus2 = '';
  kakssisend: any;
  kaksnumber: number;
  uuskaksnumber: any;
  robotloome2() {
    this.arvamus2 = 'Abieluga seoses võivad kaasneda lahutuse probleemid, millest omakorda on olulisemad lastega ja vara jaotusega seonduv. Samuti võib olla tegemist olukorraga, kus üks abikaasa hakkab piirama teise õiguseid või vabadusi, jälitama, keeldusid kehtestama vms.';
    this.kakssisend = localStorage.setItem("abielu", '1');
    return this.arvamus2;
  }

  arvamus3 = '';
  kolmsisend: any;
  kolmnumber: number;
  uuskolmnumber: any;
  robotloome3() {
    this.arvamus3 = 'Liikluses tekib sageli pinevaid olukordi, õnnetusi ja vaidluseid. Sõltuvalt sellest, mis täpselt juhtus, on ka lahenduskäigud erinevad (näiteks kas tegu oli ainult plekimõlkimisega või sai keegi õnnetuses ka kannatada). Üldine raamistik olukordade mõtestamiseks tuleb liiklusseadusest, kuid ka mujalt.';
    this.kolmsisend = localStorage.setItem("liiklus", '1');
    return this.arvamus3; 
  }

  arvamus4 = '';
  nelisisend: any;
  nelinumber: number;
  uusnelinumber: any;
  //this.nelisisend = localStorage.getItem("vargus", '1');
  robotloome4() {
    this.arvamus4 = 'Vargus on varalise eseme õigusvastane võtmine teiselt isikult, see võib olla salajane (tavaliselt esinev) kui ka avalik (omaniku nähes). Varguse korral on võimalik nõuda tekitatud varalise kahju hüvitamist.';
    this.nelisisend = localStorage.setItem("vargus", '1');
    //this.nelinumber=Number(this.nelisisend);
   // this.uusnelinumber= this.nelinumber + 1;
    //localStorage.setItem("vargus", this.uusnelinumber);
    return this.arvamus4;
  }

  arvamus4a = '';
  neliasisend: any;
  nelianumber: number;
  uusnelianumber: any;
  robotloome4a() {
    this.arvamus4a = 'Võlgu olemine ei tähenda õigusrikkumist, kuid raha kättesaamine võlgnikult on tugevalt juriidiline küsimus. Samuti on juriidiline probleem see, kui võlausaldaja kasutab võla kättesaamiseks ebaseaduslikke vahendeid. Ehk siis võla korral on probleemid väga mitmepidised ja sageli vajavad õiguslikku sekkumist.';
    this.neliasisend = localStorage.setItem("volg", '1');
    return this.arvamus4a;
  }

  arvamus5 = '';
  viissisend: any;
  viisnumber: number;
  uusviisnumber: any;
  robotloome5() {
    //this.probleemike = localStorage.getItem("loodudprobleem");
    this.arvamus5 = 'Pärimisega seonduvad sageli väga suured probleemid pärijate vahel, lihtsalt minnakse tülli ja siis hakatakse teineteisele survet avaldama. Pärimisvaidlused sugulaste vahel on ühed kõige emotsionaalsemad üldse, asjalik juriidiline sekkumine kohe alguses on sellistel puhkudel parim, mida ette võtta saaks.';
    this.viissisend = localStorage.setItem("parandus", '1');
    return this.arvamus5;
  }
  
  arvamus6 = '';
  kuussisend: any;
  kuusnumber: number;
  uuskuusnumber: any;
  robotloome6() {
   this.arvamus6 = 'Ärivaidlused on ettevõtluses väga sagedased. Alustatakse koos, pingutatakse koos, kuid ühel päeval minnakse lootusetult tülli ja hakatakse teineteisega kaklema. Oluline on selliseid vaidlueid õigesti lahendada, kuid veelgi parem ära hoida. Ühel või teisel juhul on oluline, et majapidamine oleks juriidiliselt korras.';
   this.kuussisend = localStorage.setItem("arivaidlus", '1');
   return this.arvamus6;
  }

  arvamus7 = '';
  seitsesisend: any;
  seitsenumber: number;
  uusseitsenumber: any;
  robotloome7() {
   this.arvamus7 = 'Vaidlused maadega seonduvates küsimustes on väga olulised, läbivad mitmeid põlvkondi ja loovad olukordi, kus tülli minnakse eluks ajaks. Maaküsimused on olulised, tähtsad nii emotsionaalselt kui materiaalselt, seetõttu tuleb neile tähelepanu pöörata juriidiliselt kõige targemal moel, ning veelgi parem, võimalusel need vaidlused üldse ära hoida.';
   this.seitsesisend = localStorage.setItem("maavaidlus", '1');
   return this.arvamus7;
  }

  public session = [];
  public writing = false;
  public messages = [
    {
      trigger: 'sessionStart',
      response: 'Tere, mina olen robot, kes proovib suunata, kuidas tekkinud probleeme peaks hakkama lahendama. Ma annan vaid esmaseid suuniseid, edasine tuleb selle programmi teistest alajaotustest.',
      options: ['Naabrid', 'Abielu', 'Liiklus', 'Vargus', 'Võlg', 'Pärandus', 'Ärivaidlus', 'Maavaidlus'],
    },
    {
      trigger: 'Naabrid',
      response: this.robotloome(),
      options: ['Abielu', 'Liiklus', 'Vargus', 'Võlg', 'Pärandus', 'Ärivaidlus', 'Maavaidlus', 'Algusesse'],
    },
    {
      trigger: 'Abielu',
      response: this.robotloome2(),
      options: ['Naabrid', 'Liiklus', 'Vargus', 'Võlg', 'Pärandus', 'Ärivaidlus', 'Maavaidlus', 'Algusesse'],
    },
    {
      trigger: 'Liiklus',
      response: this.robotloome3(),
      options: ['Naabrid', 'Abielu', 'Vargus', 'Võlg', 'Pärandus',  'Ärivaidlus', 'Maavaidlus', 'Algusesse'],
    },
    {
      trigger: 'Vargus',
      response: this.robotloome4(),
      options: ['Naabrid', 'Abielu', 'Liiklus', 'Võlg', 'Pärandus', 'Ärivaidlus', 'Maavaidlus', 'Algusesse'],
    },
    {
      trigger: 'Võlg',
      response: this.robotloome4a(),
      options: ['Naabrid', 'Abielu', 'Liiklus', 'Vargus', 'Pärandus', 'Ärivaidlus', 'Maavaidlus', 'Algusesse'],
    },
    {
      trigger: 'Pärandus',
      response: this.robotloome5(),
      options: ['Naabrid', 'Abielu', 'Liiklus', 'Vargus', 'Võlg', 'Ärivaidlus', 'Maavaidlus', 'Algusesse'],
    },
    {
      trigger: 'Ärivaidlus',
      response: this.robotloome6(),
      options: ['Naabrid', 'Abielu', 'Liiklus', 'Vargus', 'Võlg', 'Pärandus', 'Maavaidlus', 'Algusesse'],
    },
    {
      trigger: 'Maavaidlus',
      response: this.robotloome7(),
      options: ['Naabrid', 'Abielu', 'Liiklus', 'Vargus', 'Võlg', 'Pärandus', 'Ärivaidlus', 'Algusesse'],
    },
    {
      trigger: 'Algusesse',
      response: 'Tere, olen Bonito Robot de Inteligencia Artificial, valige oma soov!',
      options: ['Naabrid', 'Abielu', 'Liiklus', 'Vargus', 'Võlg', 'Pärandus', 'Ärivaidlus', 'Maavaidlus'],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.session.push(
      this.formartMsjSession('bot', this.getNextMsg('sessionStart'))
    );
  }

  getNextMsg(trigger: string) {
    let msj = this.messages.find((msj) => msj.trigger == trigger);
    if (msj.trigger == 'Algusesse') {
      this.session = [];
      this.session.push(
        this.formartMsjSession('bot', this.getNextMsg('sessionStart'))
      );
    }

    if (msj.trigger == 'Naabrid') {
      this.ukssisend = localStorage.getItem("naabrid");
      this.uksnumber=Number(this.ukssisend);
      this.uusuksnumber= this.uksnumber + 1;
      localStorage.setItem("naabrid", this.uusuksnumber);
      
    }
    
    if (msj.trigger == 'Abielu') {
      this.kakssisend = localStorage.getItem("abielu");
      this.kaksnumber=Number(this.kakssisend);
      this.uuskaksnumber= this.kaksnumber + 1;
      localStorage.setItem("abielu", this.uuskaksnumber);
      
    }

    if (msj.trigger == 'Liiklus') {
      this.kolmsisend = localStorage.getItem("liiklus");
      this.kolmnumber=Number(this.kolmsisend);
      this.uuskolmnumber= this.kolmnumber + 1;
      localStorage.setItem("liiklus", this.uuskolmnumber);
    
    }

    if (msj.trigger == 'Vargus') {
      this.nelisisend = localStorage.getItem("vargus");
      this.nelinumber=Number(this.nelisisend);
      this.uusnelinumber= this.nelinumber + 1;
      localStorage.setItem("vargus", this.uusnelinumber);
      
    }

    if (msj.trigger == 'Võlg') {
      this.neliasisend = localStorage.getItem("volg");
      this.nelianumber=Number(this.neliasisend);
      this.uusnelianumber= this.nelianumber + 1;
      localStorage.setItem("volg", this.uusnelianumber);
      
    }
 
    if (msj.trigger == 'Pärandus') {
      this.viissisend = localStorage.getItem("parandus");
      this.viisnumber=Number(this.viissisend);
      this.uusviisnumber= this.viisnumber + 1;
      localStorage.setItem("parandus", this.uusviisnumber);
    
    }
    if (msj.trigger == 'Ärivaidlus') {
      this.kuussisend = localStorage.getItem("arivaidlus");
      this.kuusnumber=Number(this.kuussisend);
      this.uuskuusnumber= this.kuusnumber + 1;
      localStorage.setItem("arivaidlus", this.uuskuusnumber);
    
    }
    if (msj.trigger == 'Maavaidlus') {
      this.seitsesisend = localStorage.getItem("maavaidlus");
      this.seitsenumber=Number(this.seitsesisend);
      this.uusseitsenumber= this.seitsenumber + 1;
      localStorage.setItem("maavaidlus", this.uusseitsenumber);
    
    }

    return msj;
  }

  onOptionSelected(option: any) {
    this.writing = true;
    setTimeout(() => {
      this.session.push(this.formartMsjSession('user', { response: option }));
      this.session.push(this.formartMsjSession('bot', this.getNextMsg(option)));
      this.writing = false;
    }, 1800);
  }

  formartMsjSession(autor, msg) {
    return {
      autor,
      ...msg,
    };
  }


  

}
