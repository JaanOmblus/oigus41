import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'chartproblem',
  templateUrl: './chartproblem.component.html',
  styleUrls: [ './chartproblem.component.scss' ]
})
export class ChartproblemComponent implements OnInit  {
  type:any;
  options: any;
  vaartus = 86;
  
  ngOnInit(): void {

    setInterval (() => { 

    this.options = {
     
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#7CFC00'],
                [0.7, '#FFEA00'],
                [1, '#FF3131']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: 40,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} prblm',
            color: 'inherit'
          },
          data: [
            {
              value: this.vaartus
            }
          ]
        },
      ]


    }; //siit lopeb options...
    ////GraafElasttotal raudtee pealt on intervalli näide

  }, 2000);

  }

  poordu() {
    this.vaartus = 48;
  }

  maksa() {
    this.vaartus = 24;
  }


}

