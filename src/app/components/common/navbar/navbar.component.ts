import { Component, Input } from '@angular/core';

export interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  
  // Permite personalizar los items del menú desde el padre (opcional)
  @Input() menuItems: MenuItem[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Sobre nosotros', route: '/sobre-nosotros' },
    { label: 'Habitaciones', route: '/habitaciones' },
    { label: 'Experiencias', route: '/experiencias' },
    { label: 'Day Pass', route: '/day-pass' },
    { label: 'Instalaciones', route: '/instalaciones' },
    { label: 'Contáctanos', route: '/contacto' }
  ];

  // Estado del menú mobile (para implementación responsive futura)
  mobileMenuOpen = false;

  constructor() { }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onReservarClick(): void {
    console.log('🎯 Botón Reservar clickeado');
    // TODO: Implementar lógica de reserva o redirigir a sistema de reservas
    alert('Sistema de reservas próximamente. Por favor contacta al +503 1234-5678');
  }
}