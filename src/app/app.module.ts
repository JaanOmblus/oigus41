import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FormControl } from '@angular/forms';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { AppRoutingModule } from './app-routing.module';

import { AvalehtComponent} from './avaleht/avaleht.component';
import { Alaleht1Component} from './alaleht1/alaleht1.component';
import { Alaleht2Component} from './alaleht2/alaleht2.component';
import { Alaleht3Component} from './alaleht3/alaleht3.component';
import { Alaleht4Component} from './alaleht4/alaleht4.component';
import { Alaleht5Component} from './alaleht5/alaleht5.component';
import { Alaleht6Component} from './alaleht6/alaleht6.component';
import { Alaleht7Component} from './alaleht7/alaleht7.component';
import { Alaleht8Component} from './alaleht8/alaleht8.component';
import { Alaleht9Component} from './alaleht9/alaleht9.component';

import { RobotComponent } from './robot/robot.component';
import { RbtComponent } from './robot/robot-msg/robot-msg.component';
import { HagiComponent } from './hagi/hagi.component';
import { HagikirjutamineComponent } from './hagikirjutamine/hagikirjutamine.component';
import { HagitekstComponent } from './hagitekst/hagitekst.component';
import { Hagitekst2Component } from './hagitekst2/hagitekst2.component';
import { Hagitekst3Component } from './hagitekst3/hagitekst3.component';
import { HagiopetusComponent } from './hagiopetus/hagiopetus.component';
import { Hagiopetus2Component } from './hagiopetus2/hagiopetus2.component';

import { RobotnuppComponent } from './robotnupp/robotnupp.component';
import { HaginuppComponent } from './haginupp/haginupp.component';
import { NuppkaasusComponent } from './nuppkaasus/nuppkaasus.component';
import { NuppriigiloivComponent } from './nuppriigiloiv/nuppriigiloiv.component';
import { NuppsuurusComponent } from './nuppsuurus/nuppsuurus.component';
import { NuppteenusedComponent } from './nuppteenused/nuppteenused.component';
import { TabelrahaComponent } from './tabelraha/tabelraha.component';

import { TavatekstComponent } from './tavatekst/tavatekst.component';
import { KaasusedComponent } from './kaasused/kaasused.component';
import { SisendriigiloivComponent } from './sisendriigiloiv/sisendriigiloiv.component';
import { ChartproblemComponent } from './chartproblem/chartproblem.component';
import { InfovolgComponent } from './infovolg/infovolg.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    FormsModule,
//    FormControl,
//    Injectable,
    HttpClientModule,
    ReactiveFormsModule,
    //RouterModule.forRoot([
    //  { path: '', component: ProductListComponent },
    //]),
    AppRoutingModule, 
    RouterModule.forRoot([
      { path: '', 
      //redirectTo: './avaleht',
      //pathMatch: 'full',
      component: AvalehtComponent },
      { path: 'alaleht1', component: Alaleht1Component }
      //{ path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AvalehtComponent,
    Alaleht1Component,
    Alaleht2Component,
    Alaleht3Component,
    Alaleht4Component,
    Alaleht5Component,
    Alaleht6Component,
    Alaleht7Component,
    Alaleht8Component,
    Alaleht9Component,
    RobotComponent,
    RbtComponent,
    HagiComponent,
    HagikirjutamineComponent,
    HagitekstComponent,
    Hagitekst2Component,
    Hagitekst3Component,
    HagiopetusComponent,
    Hagiopetus2Component,
    RobotnuppComponent,
    HaginuppComponent,
    NuppkaasusComponent,
    NuppriigiloivComponent,
    NuppsuurusComponent,
    NuppteenusedComponent,
    TabelrahaComponent,
    TavatekstComponent,
    KaasusedComponent,
    SisendriigiloivComponent,
    ChartproblemComponent,
    InfovolgComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/