import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent {

  hotelInfo = {
    founded: '1998',
    location: 'Playa El Tunco, La Libertad, El Salvador',
    philosophy: 'Hospitalidad auténtica con pasión por el servicio',
    mission: 'Crear experiencias memorables que conecten a nuestros huéspedes con la belleza natural de El Salvador'
  };

  values = [
    {
      title: 'Hospitalidad',
      description: 'Cada huésped es parte de nuestra familia',
      icon: '❤️'
    },
    {
      title: 'Excelencia',
      description: 'Calidad en cada detalle de tu estadía',
      icon: '⭐'
    },
    {
      title: 'Sostenibilidad',
      description: 'Compromiso con el medio ambiente',
      icon: '🌱'
    },
    {
      title: 'Autenticidad',
      description: 'Experiencia genuina salvadoreña',
      icon: '🇸🇻'
    }
  ];

  constructor() { }
}