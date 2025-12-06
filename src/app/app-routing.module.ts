import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar páginas
import { HomePageComponent } from './components/general-pages/home-page/home-page.component';
import { AboutPageComponent } from './components/general-pages/about-page/about-page.component';
import { RoomsPageComponent } from './components/general-pages/rooms-page/rooms-page.component';
import { ExperiencesPageComponent } from './components/general-pages/experiences-page/experiences-page.component';
import { DaypassPageComponent } from './components/general-pages/daypass-page/daypass-page.component';
import { FacilitiesPageComponent } from './components/general-pages/facilities-page/facilities-page.component';
import { ContactPageComponent } from './components/general-pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'sobre-nosotros',
    component: AboutPageComponent
  },
  {
    path: 'habitaciones',
    component: RoomsPageComponent
  },
  {
    path: 'experiencias',
    component: ExperiencesPageComponent
  },
  {
    path: 'day-pass',
    component: DaypassPageComponent
  },
  {
    path: 'instalaciones',
    component: FacilitiesPageComponent
  },
  {
    path: 'contacto',
    component: ContactPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }