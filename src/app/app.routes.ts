import { Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    // when you want to redirect with conditions
    //{path:"",redirectTo: ()=>{return ""} },
    {path:"",redirectTo:'dashboard',pathMatch:'full' },
    {path:"addStaff" , component:AddPersonComponent},
    {path:"dashboard",component:DashboardComponent}
];
