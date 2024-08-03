import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BmiPageComponent } from './bmi-page/bmi-page.component';

export const routes: Routes = [
    { path: 'home-page', component: HomeComponent },
    { path: 'about-page', component: AboutComponent },
    { path: 'contact-page', component: ContactComponent },
    { path: 'bmi-page', component: BmiPageComponent },
];
