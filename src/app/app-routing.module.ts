import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {Page404Component} from './page404/page404.component';
import {SearchComponent} from './tv/search/search.component';
import {ShowDetailsComponent} from './tv/show-details/show-details.component';
import {ShowDetailsResolver} from './tv/show-details/show-details.resolver';
import {LoggedInGuard} from './logged-in.guard';

export interface ShowDetailsParams {
  id: string;
}

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tv', component: SearchComponent},
  {
    path: 'tv/:id',
    component: ShowDetailsComponent,
    resolve: {
      show: ShowDetailsResolver
    },
    // canActivate: [LoggedInGuard]
  },
  // {path: 'user/create', component: ContactComponent},
  // {path: 'user/:id', component: ContactComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  providers: [
    ShowDetailsResolver,
    LoggedInGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
