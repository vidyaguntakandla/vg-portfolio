import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutVgWrapperComponent } from './pages/about-vg-wrapper/about-vg-wrapper/about-vg-wrapper.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SkillsComponent } from './pages/about-vg-wrapper/components/skills/skills.component';
import { ExperienceComponent } from './pages/about-vg-wrapper/components/experience-wrapper/experience/experience.component';
import { EducationComponent } from './pages/about-vg-wrapper/components/education-wrapper/education/education.component';
import { ContactInfoComponent } from './pages/about-vg-wrapper/components/contact-info-wrapper/contact-info/contact-info.component';
import { AboutMeComponent } from './pages/about-vg-wrapper/components/about-me/about-me.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  {
    path: 'vidyaguntakandla', component: AboutVgWrapperComponent,
    children: [
      { path: 'about-me', component: AboutMeComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'education', component: EducationComponent },
      { path: 'contact-deatils', component: ContactInfoComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: false, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
