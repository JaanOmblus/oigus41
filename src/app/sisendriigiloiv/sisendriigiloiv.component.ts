import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'sisendriigiloiv',
  templateUrl: './sisendriigiloiv.component.html',
  styleUrls: ['./sisendriigiloiv.component.scss']
  
})
export class SisendriigiloivComponent implements OnInit {

  numberValue = 0;
  numberValue2: number;
  myProperty = "lsdkfjsdlfkj";

  korrutameLabi() {
    this.numberValue2 = this.numberValue*2;
  }


  riigiloivSumma: number;
  riigiloiv() {
    
    if (this.numberValue == 0) {
      this.riigiloivSumma = 0;
    }

    else if (this.numberValue < 350) {
      this.riigiloivSumma = 75;
    }

    else if (this.numberValue < 500) {
      this.riigiloivSumma = 100;
    }

    else if (this.numberValue < 750) {
      this.riigiloivSumma = 125;
    }

    else if (this.numberValue < 1000) {
      this.riigiloivSumma = 175;
    }

    else if (this.numberValue < 1500) {
      this.riigiloivSumma = 200;
    }

    else if (this.numberValue < 2000) {
      this.riigiloivSumma = 225;
    }

    else if (this.numberValue < 2500) {
      this.riigiloivSumma = 250;
    }

    else if (this.numberValue < 3000) {
      this.riigiloivSumma = 275;
    }

    else if (this.numberValue < 3500) {
      this.riigiloivSumma = 300;
    }

    else if (this.numberValue < 4000) {
      this.riigiloivSumma = 325;
    }

    else if (this.numberValue < 4500) {
      this.riigiloivSumma = 350;
    }

    else if (this.numberValue < 5000) {
      this.riigiloivSumma = 400;
    }

    return this.riigiloivSumma;

  }

  ngOnInit() {
  }

  

}
