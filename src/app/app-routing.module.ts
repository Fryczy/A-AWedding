import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {LocationComponent} from './location/location.component';
import {GiftsComponent} from './gifts/gifts.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    },
    {
        path: 'location',
        component: LocationComponent
    },
    {
        path: 'gifts',
        component: GiftsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
