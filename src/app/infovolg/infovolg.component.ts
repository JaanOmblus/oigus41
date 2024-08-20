import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'infovolg-component',
  templateUrl: './infovolg.component.html',
  styleUrls: ['./infovolg.component.scss']
})
export class InfovolgComponent {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Teil on osutatud teenuste eest võlg üleval, uusi teenuseid käivitada enne võla tasumist ei ole võimalik.',
      html: true,
      css: true,
      js: true
    }
  ];

  PopUp(event: Event, element: HTMLDivElement) {
    // element.classList.remove('popup');
    // element.classList.add('test');
    // console.log(element.classList);
    element.classList.toggle('is-visible');
  }
  
}