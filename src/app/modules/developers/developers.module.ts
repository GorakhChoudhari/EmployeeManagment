import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { JrDevComponent } from './components/jr-dev/jr-dev.component';
import { SrDevComponent } from './components/sr-dev/sr-dev.component';
import { ArchComponent } from './components/arch/arch.component';
import { DeveloperContainerComponent } from './components/developer-container/developer-container.component';


@NgModule({
  declarations: [
    JrDevComponent,
    SrDevComponent,
    ArchComponent,
    DeveloperContainerComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule
  ]
})
export class DevelopersModule { }
