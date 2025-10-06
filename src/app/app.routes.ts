import { Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataComponent } from './data/data.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'buyPage', component: BuyPageComponent },
    { path: 'data', component: DataComponent },
    { path: '**', component: PageNotFoundComponent },
];
