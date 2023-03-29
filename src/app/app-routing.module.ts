import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupTutorComponent } from './pages/signup-tutor/signup-tutor.component';
import { TutorsComponent } from './pages/tutors/tutors.component';
import { TutorProfileComponent } from './pages/tutor-profile/tutor-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MyRequestsComponent } from './pages/myRequests/myRequests.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-tutor', component: SignupTutorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'tutors', component: TutorsComponent },
  { path: 'myRequests', component: MyRequestsComponent },
  
  { path: 'tutor/:id', component: TutorProfileComponent },
  { path: 'settings', component: SettingsComponent },

  {path:'admin',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }