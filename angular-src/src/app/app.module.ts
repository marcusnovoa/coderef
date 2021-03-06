import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { UpdateUserService } from './services/update-user.service';
// import { SearchHistoryComponent } from './components/search-history/search-history.component';

import { AvatarModule } from "ng2-avatar";
import { SearchHistoryListComponent } from './components/search-history-list/search-history-list.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { PostResourceComponent } from './components/post-resource/post-resource.component';
import { ResourcesService } from './services/resources.service';
import { FindResourceComponent } from './components/find-resource/find-resource.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'home' }},
  {path: 'register', component: RegisterComponent, data: { animation: 'register' }},
  {path: 'login', component: LoginComponent, data: { animation: 'login' }},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], data: { animation: 'dashboard' }},
  {path: 'search', component: SearchComponent, data: { animation: 'search' }},
  {path: 'post-resource', component: PostResourceComponent, canActivate:[AuthGuard], data: { animation: 'post-resource' }},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard], data: { animation: 'profile' }},
  {path: 'find-resource', component: FindResourceComponent, canActivate:[AuthGuard],  data: { animation: 'find-resource' }},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SearchComponent,
    SearchHistoryListComponent,
    EditProfileComponent,
    PostResourceComponent,
    FindResourceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    BrowserAnimationsModule,
    AvatarModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, SearchService, UpdateUserService, ResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
