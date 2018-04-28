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
import { BobComponent } from './components/bob/bob.component';
import { Bob2Component } from './components/bob2/bob2.component';
import { SrdataService } from './srdata.service';
import { MenuService } from './menu.service';
import { RobotsService } from './robots.service';
import { Menu1Component } from './components/menu1/menu1.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { Menu3Component } from './components/menu3/menu3.component';
import { Menu4Component } from './components/menu4/menu4.component';
import { Menu15Component } from './components/menu1-5/menu1-5.component';





const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'request', component: RequesttableComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'reserve', component: ReservequeueComponent},
  {path: 'result', component: QueueresultComponent},
  {path: 'call', component: QueuecallComponent},
  {path: 'guide', component: GuidetotableComponent},
  { path: 'gail', component: TestgailComponent },
  {path: 'bob', component: BobComponent },
  {path: 'bob2', component: Bob2Component },
  {path: 'menu1', component: Menu1Component },
  {path: 'menu1_5', component: Menu15Component },
  {path: 'menu2', component: Menu2Component },
  {path: 'menu3', component: Menu3Component },
  {path: 'menu4', component: Menu4Component },
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
    TestbhumComponent,
    BobComponent,
    Bob2Component,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    Menu15Component,
 

  ],
  imports: [
    FormsModule,
    MbscModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SrdataService, MenuService, RobotsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
