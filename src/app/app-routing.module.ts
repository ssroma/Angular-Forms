import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'driven', component: DrivenFormComponent},
  { path: 'reactive', component: ReactiveFormComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routerComponents = [ 'HomeComponent', 'DrivenFormComponent', 'ReactiveFormComponent' ];
