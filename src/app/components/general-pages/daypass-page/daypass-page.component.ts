import { Component } from '@angular/core';

@Component({
  selector: 'app-daypass-page',
  templateUrl: './daypass-page.component.html'
})
export class DaypassPageComponent {

  // Opciones de Day Pass
  dayPassOptions = [
    {
      name: 'Day Pass Individual',
      price: 35,
      description: 'Acceso completo para una persona',
      includes: [
        'Acceso a piscina y playa',
        'Uso de tumbonas y sombrillas',
        'Acceso a duchas y vestuarios',
        'WiFi gratuito',
        'Una bebida de bienvenida'
      ]
    },
    {
      name: 'Day Pass Familiar',
      price: 120,
      description: 'Ideal para familias hasta 4 personas',
      includes: [
        'Todo lo incluido en el pase individual',
        'Acceso para hasta 4 personas (2 adultos + 2 niños)',
        'Área de juegos para niños',
        'Descuento del 15% en alimentos y bebidas',
        'Una toalla por persona'
      ]
    },
    {
      name: 'Day Pass Premium',
      price: 75,
      description: 'Experiencia mejorada con servicios exclusivos',
      includes: [
        'Todo lo incluido en el pase individual',
        'Gazebo privado con servicio a la mesa',
        'Almuerzo buffet incluido',
        'Descuento del 20% en el spa',
        'Parking preferencial'
      ]
    }
  ];

  // Horarios
  schedule = {
    entrada: '9:00 AM',
    salida: '6:00 PM',
    dias: 'Todos los días'
  };

  // Normas
  rules = [
    'Los niños menores de 12 años deben estar supervisados por un adulto',
    'No se permite el ingreso de alimentos o bebidas externas',
    'Prohibido fumar en áreas de piscina',
    'Respetar las normas de convivencia del hotel',
    'El Day Pass no incluye acceso a habitaciones',
    'Sujeto a disponibilidad y capacidad del hotel'
  ];

  constructor() { }

  onReservarDayPass(option: any): void {
    console.log('Reservar Day Pass:', option.name);
    alert(`Reservar ${option.name}\nPrecio: $${option.price}\n\nPróximamente disponible reserva online.`);
  }
}