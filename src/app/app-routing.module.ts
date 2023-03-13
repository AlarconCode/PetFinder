import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: 'loading', component: LoadingPageComponent },
  {path: 'loading', redirectTo: 'bienvenida'},
  {path: 'home', component: HomePageComponent},
  {path: 'publicar', component: PostPageComponent},
  {path: 'mi-perfil', component: ProfilePageComponent},
  {path: 'bienvenida', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
