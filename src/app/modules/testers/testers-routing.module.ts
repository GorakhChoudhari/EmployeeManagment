import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JrDevComponent } from '../developers/components/jr-dev/jr-dev.component';
import { TesterConatinerComponent } from './tester-conatiner/tester-conatiner.component';
import { JrTesterComponent } from './Components/jr-tester/jr-tester.component';
import { SrTesterComponent } from './Components/sr-tester/sr-tester.component';

const routes: Routes = [
  {path:"",component:TesterConatinerComponent,
   children:[
    {path:"",component:JrTesterComponent},
    {path:"JrTester",component:JrTesterComponent},
    {path:"SrTester",component:SrTesterComponent},
    
   ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestersRoutingModule { }
