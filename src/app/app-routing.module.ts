import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Welcome Page', component: HomeComponent },
  { path: 'services', title: 'Services Page', component: ServicesComponent },
  { path: 'about', title: 'About Us Page', component: AboutComponent },
  { path: 'portfolio', title: 'Portfolio Page', component: PortfolioComponent },
  { path: 'contact', title: 'Contact Us Page', component: ContactComponent },
  { path: '**', title: 'Page Not Found', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
