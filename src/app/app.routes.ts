import { Routes } from '@angular/router';
import { VotesComponent } from './votes/votes.component';
import { RankingsComponent } from './rankings/rankings.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    { path: 'votes', component: VotesComponent  },
    { path: 'rankings', component: RankingsComponent },
    { path: 'login', component: LoginComponent },

    { path: '', pathMatch: 'full', redirectTo: '/' },
];