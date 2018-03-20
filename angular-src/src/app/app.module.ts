import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { TestbhumComponent } from './components/testbhum/testbhum.component';
import { TestgailComponent } from './components/testgail/testgail.component';


const appRoutes: Routes = [
  {path: '', component: TestbhumComponent},
  {path: 'gail', component: TestgailComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    TestbhumComponent,
    TestgailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
