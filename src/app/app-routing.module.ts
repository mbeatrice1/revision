import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'users', component: LandingComponent },
  {path: 'repositories', component: RepositoryComponent},

  {path: '', redirectTo: "/home", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
