import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UpdatePostPageComponent } from './pages/update-post-page/update-post-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostFormComponent } from './component/post-form/post-form.component';
import { PublicProfilePageComponent } from './pages/public-profile-page/public-profile-page.component';
import { UpdateRegisterPageComponent } from './pages/update-register-page/update-register-page.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { CardPostComponent } from './component/card-post/card-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingPageComponent,
    WelcomePageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    ContactPageComponent,
    UpdatePostPageComponent,
    PostPageComponent,
    PostFormComponent,
    PublicProfilePageComponent,
    UpdateRegisterPageComponent,
    RegisterFormComponent,
    CardPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
