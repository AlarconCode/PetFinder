import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './component/post-form/post-form.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PublicProfilePageComponent } from './pages/public-profile-page/public-profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UpdateRegisterPageComponent } from './pages/update-register-page/update-register-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', component: LoadingPageComponent },
  {path: 'bienvenida', component: WelcomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'publicar', component: PostPageComponent},
  {path: 'mi-perfil', component: ProfilePageComponent},
  {path: 'registro', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'perfil-publico', component: PublicProfilePageComponent},
  {path: 'contacto', component: ContactPageComponent},
  {path: 'actualizar-registro', component: UpdateRegisterPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
