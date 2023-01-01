import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'article', component: ArticleComponent },
  { path: '**', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
