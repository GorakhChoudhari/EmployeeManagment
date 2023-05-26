import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestersRoutingModule } from './testers-routing.module';
import { JrTesterComponent } from './Components/jr-tester/jr-tester.component';
import { SrTesterComponent } from './Components/sr-tester/sr-tester.component';
import { TesterConatinerComponent } from './tester-conatiner/tester-conatiner.component';


@NgModule({
  declarations: [
    JrTesterComponent,
    SrTesterComponent,
    TesterConatinerComponent
  ],
  imports: [
    CommonModule,
    TestersRoutingModule
  ]
})
export class TestersModule { }
