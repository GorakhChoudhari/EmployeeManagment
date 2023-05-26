import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JrDevComponent } from './modules/developers/components/jr-dev/jr-dev.component';

const routes: Routes = [
  {path:"", component:JrDevComponent},
  {path:"sign-In",component:JrDevComponent},
  {path:"Developers",loadChildren:()=>import('./modules/developers/developers.module').then((m) => m.DevelopersModule)},
  {path:"Tester",loadChildren:()=>import('./modules/testers/testers.module').then((m)=>m.TestersModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
