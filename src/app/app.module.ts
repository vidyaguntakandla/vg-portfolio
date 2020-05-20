import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutVgWrapperComponent } from './pages/about-vg-wrapper/about-vg-wrapper/about-vg-wrapper.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactInfoComponent } from './pages/about-vg-wrapper/components/contact-info-wrapper/contact-info/contact-info.component';
import { SkillsComponent } from './pages/about-vg-wrapper/components/skills/skills.component';
import { ExperienceComponent } from './pages/about-vg-wrapper/components/experience-wrapper/experience/experience.component';
import { EducationComponent } from './pages/about-vg-wrapper/components/education-wrapper/education/education.component';
import { SocialMediaLinksComponent } from './shared/components/social-media-links/social-media-links.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { ProjectTileComponent } from './pages/about-vg-wrapper/components/experience-wrapper/project-tile/project-tile.component';
import { DegreeTileComponent } from './pages/about-vg-wrapper/components/education-wrapper/degree-tile/degree-tile.component';
import { AboutMeComponent } from './pages/about-vg-wrapper/components/about-me/about-me.component';
import {
  SocialMediaIconElementsComponent
} from './pages/about-vg-wrapper/components/contact-info-wrapper/social-media-icon-elements/social-media-icon-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutVgWrapperComponent,
    HomePageComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactInfoComponent,
    PageNotFoundComponent,
    FooterComponent,
    SocialMediaLinksComponent,
    CarouselComponent,
    ProjectTileComponent,
    DegreeTileComponent,
    AboutMeComponent,
    SocialMediaIconElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
