import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import{DetailsComponent} from './components/details/details.component'
import{ChartsComponent} from './components/charts/charts.component'

const routes: Routes = [
    {path:'', component: HomeComponent, pathMatch:'full'},
    {path: 'charts' , component: ChartsComponent},
    {path: 'details/:id' , component: DetailsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }