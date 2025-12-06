import { Component } from '@angular/core';

@Component({
  selector: 'app-facilities-page',
  templateUrl: './facilities-page.component.html'
})
export class FacilitiesPageComponent {

  facilities = [
    {
      name: 'Piscina Infinity',
      description: 'Piscina infinity con vista panoramica al oceano. Incluye area para ninos y jacuzzi integrado.',
      icon: 'P',
      features: ['Vista al mar', 'Jacuzzi', 'Area infantil', 'Bar en piscina'],
      hours: '6:00 AM - 10:00 PM',
      imageUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9'
    },
    {
      name: 'Restaurante Marea Alta',
      description: 'Restaurante gourmet con cocina internacional y platos locales. Chef ejecutivo con experiencia internacional.',
      icon: 'R',
      features: ['Desayuno buffet', 'Menu a la carta', 'Opciones vegetarianas', 'Vista al mar'],
      hours: 'Desayuno 6:00-11:00 AM | Almuerzo 12:00-3:00 PM | Cena 6:00-10:00 PM',
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    },
    {
      name: 'Spa Serenidad',
      description: 'Centro de spa con tratamientos de relajacion, masajes terapeuticos y faciales con productos naturales.',
      icon: 'S',
      features: ['Masajes', 'Faciales', 'Tratamientos corporales', 'Sauna'],
      hours: '9:00 AM - 8:00 PM',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef'
    },
    {
      name: 'Gimnasio',
      description: 'Gimnasio equipado con maquinas de ultima generacion, pesas libres y area de cardio.',
      icon: 'G',
      features: ['Equipamiento completo', 'Aire acondicionado', 'Toallas', 'Agua purificada'],
      hours: '24 horas',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
    },
    {
      name: 'Playa Privada',
      description: 'Acceso directo a nuestra playa privada con servicio de tumbonas, sombrillas y bar de playa.',
      icon: 'B',
      features: ['Tumbonas', 'Sombrillas', 'Bar de playa', 'Toallas'],
      hours: '7:00 AM - 7:00 PM',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19'
    },
    {
      name: 'Centro de Negocios',
      description: 'Sala de conferencias y centro de negocios con equipamiento audiovisual para eventos corporativos.',
      icon: 'N',
      features: ['Proyector', 'WiFi de alta velocidad', 'Catering', 'Equipo de sonido'],
      hours: '8:00 AM - 6:00 PM',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c'
    },
    {
      name: 'Tienda de Souvenirs',
      description: 'Tienda con productos locales, artesanias y articulos de playa.',
      icon: 'T',
      features: ['Artesanias locales', 'Ropa de playa', 'Protector solar', 'Recuerdos'],
      hours: '8:00 AM - 8:00 PM',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8'
    },
    {
      name: 'Estacionamiento',
      description: 'Amplio estacionamiento privado con seguridad 24/7.',
      icon: 'E',
      features: ['Vigilancia 24/7', 'Techado', 'Espacios amplios', 'Valet parking'],
      hours: '24 horas',
      imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe'
    }
  ];

  constructor() { }
}