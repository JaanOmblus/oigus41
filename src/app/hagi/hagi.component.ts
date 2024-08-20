import { Component, OnInit } from '@angular/core';
import { PdfService } from './pdf.service';
//import * as PDFObject from 'pdfobject';

//declare const PDFObject: any;

//import { products } from '../products';

@Component({
  selector: 'hagi-component',
  templateUrl: './hagi.component.html',
  styleUrls: ['./hagi.component.scss']
})
export class HagiComponent implements OnInit {
  
  pdfData;
  isLoading = false;
  PDFObject: any;
  constructor(private pdfService: PdfService) {}

  lisanaitaja: any;
  ngOnInit() {
    this.isLoading = true;
    this.lisanaitaja = this.pdfService.getPdf().subscribe({
      next: (res) => {
        this.pdfData = res;
        this.isLoading = false;
        if (this.pdfData) {
          this.handleRenderPdf(this.pdfData);
        }
      },
    });
  }

  handleRenderPdf(data) {
    const pdfObject = this.PDFObject.embed(data, '#pdfContainer');
  }

}