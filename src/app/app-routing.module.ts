import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', component: LoadingPageComponent },
  {path: 'bienvenida', component: WelcomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'publicar', component: PostPageComponent},
  {path: 'mi-perfil', component: ProfilePageComponent},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
