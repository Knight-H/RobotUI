import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-lite';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { TestbhumComponent } from './components/testbhum/testbhum.component';
import { TestgailComponent } from './components/testgail/testgail.component'; 
import { HomepageComponent } from './components/homepage/homepage.component';
import { RequesttableComponent } from './components/requesttable/requesttable.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservequeueComponent } from './components/reservequeue/reservequeue.component';
import { QueueresultComponent } from './components/queueresult/queueresult.component';
import { QueuecallComponent } from './components/queuecall/queuecall.component';
import { GuidetotableComponent } from './components/guidetotable/guidetotable.component';



const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'request', component: RequesttableComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'reserve', component: ReservequeueComponent},
  {path: 'result', component: QueueresultComponent},
  {path: 'call', component: QueuecallComponent},
  {path: 'guide', component: GuidetotableComponent},
  {path: 'gail', component: TestgailComponent} 
]



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RequesttableComponent,
    MenuComponent,
    ReservequeueComponent,
    QueueresultComponent,
    QueuecallComponent,
    GuidetotableComponent,
    TestgailComponent,
    TestbhumComponent
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
