import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

export const routes: Routes = [
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomePageComponent },
];
