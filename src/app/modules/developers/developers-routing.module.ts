import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JrTesterComponent } from '../testers/Components/jr-tester/jr-tester.component';
import { DeveloperContainerComponent } from './components/developer-container/developer-container.component';
import { JrDevComponent } from './components/jr-dev/jr-dev.component';
import { SrDevComponent } from './components/sr-dev/sr-dev.component';
import { ArchComponent } from './components/arch/arch.component';

const routes: Routes = [
  {path:"",component:DeveloperContainerComponent,
  children:[
    {path:"",component:JrDevComponent},
    {path:"JrDev",component:JrDevComponent},
    {path:"SrDev",component:SrDevComponent},
    {path:"Arch",component:ArchComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersRoutingModule { }
