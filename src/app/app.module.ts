import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// LAYOUT COMPONENTS
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';

// COMMON COMPONENTS
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeroComponent } from './components/common/hero/hero.component';
import { MetricsStripComponent } from './components/common/metrics-strip/metrics-strip.component';

// PAGE COMPONENTS
import { HomePageComponent } from './components/general-pages/home-page/home-page.component';
import { AboutPageComponent } from './components/general-pages/about-page/about-page.component';
import { RoomsPageComponent } from './components/general-pages/rooms-page/rooms-page.component';
import { ExperiencesPageComponent } from './components/general-pages/experiences-page/experiences-page.component';
import { DaypassPageComponent } from './components/general-pages/daypass-page/daypass-page.component';
import { FacilitiesPageComponent } from './components/general-pages/facilities-page/facilities-page.component';
import { ContactPageComponent } from './components/general-pages/contact-page/contact-page.component';

// DOMAIN SERVICE
// HotelDataService está configurado con providedIn: 'root', no necesita declararse aquí

@NgModule({
  declarations: [
    // Root component
    AppComponent,
    
    // Layout components
    MainLayoutComponent,
    
    // Common components
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    MetricsStripComponent,
    
    // Page components
    HomePageComponent,
    AboutPageComponent,
    RoomsPageComponent,
    ExperiencesPageComponent,
    DaypassPageComponent,
    FacilitiesPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule // Para ngModel en formularios
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }