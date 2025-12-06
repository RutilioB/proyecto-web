import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  
  currentYear = new Date().getFullYear();

  contactInfo = {
    address: 'Playa El Tunco, La Libertad, El Salvador',
    phone: '+503 1234-5678',
    email: 'info@costaazulhotel.com',
    whatsapp: '+503 7890-1234'
  };

  quickLinks = [
    { label: 'Inicio', route: '/' },
    { label: 'Habitaciones', route: '/habitaciones' },
    { label: 'Experiencias', route: '/experiencias' },
    { label: 'Contáctanos', route: '/contacto' }
  ];

  socialLinks = [
    { platform: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: '📷' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: '🐦' }
  ];

  constructor() { }
}