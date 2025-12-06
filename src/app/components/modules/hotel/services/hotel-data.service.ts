import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { Experience } from '../models/experience.model';
import { Metric } from '../models/metric.model';
import { GalleryImage } from '../models/gallery-image.model';
import { ContactRequest } from '../models/contact-request.model';

@Injectable({
  providedIn: 'root'
})
export class HotelDataService {

  constructor() { }

  
  getMetrics(): Metric[] {
    return [
      {
        id: '1',
        titulo: 'Años de experiencia',
        valor: '25+',
        descripcion: 'Brindando hospitalidad de excelencia'
      },
      {
        id: '2',
        titulo: 'Habitaciones',
        valor: '120',
        descripcion: 'Espacios diseñados para tu confort'
      },
      {
        id: '3',
        titulo: 'Satisfacción',
        valor: '98%',
        descripcion: 'Huéspedes satisfechos'
      },
      {
        id: '4',
        titulo: 'Vista al mar',
        valor: '100%',
        descripcion: 'Todas nuestras habitaciones'
      }
    ];
  }

  
  getRooms(): Room[] {
    return [
      {
        id: 'rm-001',
        nombre: 'Habitación Estándar Vista al Mar',
        descripcionCorta: 'Confort y elegancia con vista panorámica al océano',
        descripcionLarga: 'Disfruta de una estancia relajante en nuestra habitación estándar, equipada con todas las comodidades modernas y una impresionante vista al mar.',
        capacidad: 2,
        precioPorNoche: 120,
        imagenUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
        etiquetas: ['Vista al mar', 'WiFi', 'Aire acondicionado', 'TV'],
        amenidades: ['WiFi de alta velocidad', 'Aire acondicionado', 'TV por cable', 'Caja de seguridad', 'Minibar', 'Baño privado', 'Balcón con vista al mar', 'Secador de pelo']
      },
      {
        id: 'rm-002',
        nombre: 'Suite Junior Frente al Mar',
        descripcionCorta: 'Espacio amplio con balcón privado',
        descripcionLarga: 'Suite espaciosa con sala de estar separada, ideal para parejas o familias pequeñas. Balcón privado con vistas espectaculares.',
        capacidad: 3,
        precioPorNoche: 200,
        imagenUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
        etiquetas: ['Balcón privado', 'Vista panorámica', 'Minibar', 'Jacuzzi'],
        amenidades: ['Sala de estar separada', 'Balcón privado', 'Jacuzzi en habitación', 'WiFi premium', 'Minibar premium', 'TV Smart 55"', 'Cafetera Nespresso', 'Batas y pantuflas', 'Servicio de habitaciones 24/7']
      },
      {
        id: 'rm-003',
        nombre: 'Suite Presidencial',
        descripcionCorta: 'Lujo máximo con acceso directo a la playa',
        descripcionLarga: 'Nuestra suite más exclusiva con dos habitaciones, sala de estar, comedor privado y acceso directo a la playa. Incluye servicio de mayordomo.',
        capacidad: 4,
        precioPorNoche: 450,
        imagenUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        etiquetas: ['Acceso a playa', 'Mayordomo', 'Cocina privada', 'Terraza'],
        amenidades: ['Dos habitaciones master', 'Sala de estar', 'Comedor privado', 'Cocina completa', 'Terraza privada 80m²', 'Acceso directo a playa', 'Servicio de mayordomo', 'Jacuzzi exterior', 'Sistema de sonido Bose', 'TV Smart 75"', 'Bar privado', 'Dos baños completos']
      },
      {
        id: 'rm-004',
        nombre: 'Habitación Familiar',
        descripcionCorta: 'Perfecta para familias con niños',
        descripcionLarga: 'Amplia habitación con dos camas matrimoniales y área de juegos. Conexión directa con habitación contigua disponible.',
        capacidad: 5,
        precioPorNoche: 180,
        imagenUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
        etiquetas: ['Familiar', 'Área de juegos', 'Vista al jardín', 'Conexión'],
        amenidades: ['Dos camas matrimoniales', 'Área de juegos infantil', 'WiFi gratis', 'TV con canales infantiles', 'Refrigerador', 'Microondas', 'Cuna disponible', 'Conexión a habitación contigua', 'Vista al jardín', 'Baño amplio']
      },
      {
        id: 'rm-005',
        nombre: 'Bungalow de Playa',
        descripcionCorta: 'Experiencia única a pie de playa',
        descripcionLarga: 'Bungalow independiente con terraza privada, hamaca y acceso inmediato a la arena. La experiencia más auténtica de playa.',
        capacidad: 2,
        precioPorNoche: 280,
        imagenUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
        etiquetas: ['Playa privada', 'Terraza', 'Hamaca', 'Romántico'],
        amenidades: ['Acceso directo a la playa', 'Terraza privada', 'Hamaca tradicional', 'Ducha exterior', 'WiFi', 'Ventilador de techo', 'Minibar', 'Batas de baño', 'Kit de playa incluido', 'Fogata privada nocturna']
      },
      {
        id: 'rm-006',
        nombre: 'Habitación Deluxe',
        descripcionCorta: 'Elegancia contemporánea con todas las comodidades',
        descripcionLarga: 'Habitación moderna con diseño minimalista, cama king size y baño de lujo con ducha de lluvia.',
        capacidad: 2,
        precioPorNoche: 150,
        imagenUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
        etiquetas: ['Moderna', 'King size', 'Ducha lluvia', 'Escritorio'],
        amenidades: ['Cama King Size premium', 'Ducha de lluvia', 'Diseño minimalista', 'WiFi de alta velocidad', 'TV Smart 50"', 'Escritorio ejecutivo', 'Cafetera', 'Aire acondicionado inteligente', 'Caja fuerte digital', 'Blackout curtains']
      }
    ];
  }

  
  getExperiences(): Experience[] {
    return [
      {
        id: 'exp-001',
        titulo: 'Surf y Bodyboard',
        descripcion: 'Clases de surf para todos los niveles. Instructores certificados y equipo incluido.',
        descripcionDetallada: 'Aprende a surfear con nuestros instructores profesionales certificados. Ofrecemos clases grupales e individuales para principiantes y niveles avanzados. Las lecciones incluyen teoría básica, técnicas de remado, posicionamiento en la tabla y práctica en el agua con supervisión constante.',
        tipo: 'aventura',
        icono: '🏄',
        imagenUrl: 'https://images.unsplash.com/photo-1502933691298-84fc14542831',
        precio: 75,
        duracion: '2 horas',
        incluye: ['Tabla de surf', 'Traje de neopreno', 'Instructor certificado', 'Seguro de accidentes', 'Fotografías de la sesión'],
        disponibilidad: 'Todos los días 8:00 AM - 5:00 PM'
      },
      {
        id: 'exp-002',
        titulo: 'Spa y Masajes',
        descripcion: 'Tratamientos de relajación con vista al mar. Masajes terapéuticos y faciales.',
        descripcionDetallada: 'Relájate en nuestro spa boutique con vista panorámica al océano. Ofrecemos masajes terapéuticos, deportivos, de piedras calientes y aromaterapia. Nuestros terapeutas certificados utilizan técnicas ancestrales y productos naturales orgánicos.',
        tipo: 'relajación',
        icono: '💆',
        imagenUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
        precio: 95,
        duracion: '60-90 minutos',
        incluye: ['Masaje personalizado', 'Aromaterapia', 'Té de hierbas', 'Acceso a área de relajación', 'Bata y pantuflas'],
        disponibilidad: 'Lunes a Domingo 9:00 AM - 8:00 PM'
      },
      {
        id: 'exp-003',
        titulo: 'Cena Romántica en la Playa',
        descripcion: 'Cena privada bajo las estrellas con menú personalizado y servicio exclusivo.',
        descripcionDetallada: 'Una experiencia gastronómica única con mesa privada en la playa, iluminada con velas y antorchas. Nuestro chef preparará un menú de 5 tiempos personalizado según sus preferencias. Incluye decoración romántica, música ambiental y servicio de mesero dedicado.',
        tipo: 'gastronomía',
        icono: '🍽️',
        imagenUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
        precio: 250,
        duracion: '3 horas',
        incluye: ['Menú de 5 tiempos', 'Vino premium', 'Decoración romántica', 'Música en vivo opcional', 'Fotografía profesional', 'Servicio exclusivo'],
        disponibilidad: 'Reserva con 48 horas de anticipación'
      },
      {
        id: 'exp-004',
        titulo: 'Kayak y Paddle Board',
        descripcion: 'Explora la costa en kayak o paddle board. Alquiler incluido con tu estadía.',
        descripcionDetallada: 'Descubre la belleza de la costa desde una perspectiva única. Alquila kayaks individuales o dobles, o prueba el paddle board. Ideal para explorar calas escondidas y observar la vida marina. Incluye instrucciones básicas y chaleco salvavidas.',
        tipo: 'aventura',
        icono: '🛶',
        imagenUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
        precio: 35,
        duracion: '1-2 horas',
        incluye: ['Kayak o paddle board', 'Chaleco salvavidas', 'Remo', 'Instrucciones básicas', 'Bolsa impermeable'],
        disponibilidad: 'Todos los días 7:00 AM - 6:00 PM'
      },
      {
        id: 'exp-005',
        titulo: 'Yoga al Amanecer',
        descripcion: 'Sesiones de yoga en la playa con instructor certificado. Ideal para comenzar el día.',
        descripcionDetallada: 'Comienza tu día con energía positiva en nuestras sesiones de yoga frente al mar. Clases de Hatha y Vinyasa yoga aptas para todos los niveles. Cada sesión incluye meditación, ejercicios de respiración y posturas adaptadas a tu nivel.',
        tipo: 'relajación',
        icono: '🧘',
        imagenUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
        precio: 25,
        duracion: '1 hora',
        incluye: ['Mat de yoga', 'Instructor certificado', 'Agua purificada', 'Toalla', 'Vista al amanecer'],
        disponibilidad: 'Lunes, Miércoles y Viernes 6:00 AM'
      },
      {
        id: 'exp-006',
        titulo: 'Tour Gastronómico Local',
        descripcion: 'Descubre los sabores auténticos de El Salvador. Visita mercados y restaurantes locales.',
        descripcionDetallada: 'Un recorrido culinario por los mejores lugares de comida local. Visita mercados tradicionales, pupuserías auténticas y restaurantes familiares. Prueba pupusas, yuca frita, tamales y bebidas típicas mientras aprendes sobre la cultura gastronómica salvadoreña.',
        tipo: 'gastronomía',
        icono: '🌮',
        imagenUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
        precio: 65,
        duracion: '4 horas',
        incluye: ['Transporte ida y vuelta', 'Guía local experto', 'Degustaciones en 5 lugares', 'Bebidas incluidas', 'Recetario de regalo'],
        disponibilidad: 'Martes y Sábados 10:00 AM'
      },
      {
        id: 'exp-007',
        titulo: 'Música en Vivo',
        descripcion: 'Disfruta de música en vivo cada fin de semana. Bandas locales y artistas invitados.',
        descripcionDetallada: 'Noches especiales con música en vivo en nuestro bar lounge. Presentamos bandas locales de rock, jazz y música latina, así como artistas invitados nacionales e internacionales. Ambiente relajado con cócteles premium y vista al mar.',
        tipo: 'entretenimiento',
        icono: '🎵',
        imagenUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae',
        precio: 0,
        duracion: '3 horas',
        incluye: ['Entrada gratuita', 'Primera consumición gratis', 'Asientos preferentes para huéspedes', 'Menú de bar disponible'],
        disponibilidad: 'Viernes y Sábados 8:00 PM'
      },
      {
        id: 'exp-008',
        titulo: 'Pesca Deportiva',
        descripcion: 'Salidas de pesca en mar abierto. Equipo profesional y capitán experimentado.',
        descripcionDetallada: 'Experiencia de pesca deportiva en alta mar con embarcación totalmente equipada. Busca marlin, pez vela, dorado y atún con nuestro capitán experimentado. Ideal para pescadores de todos los niveles, desde principiantes hasta expertos.',
        tipo: 'aventura',
        icono: '🎣',
        imagenUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
        precio: 450,
        duracion: '6 horas',
        incluye: ['Embarcación equipada', 'Capitán y marinero', 'Equipo de pesca profesional', 'Carnada y señuelos', 'Refrigerios y bebidas', 'Limpieza y empaque del pescado'],
        disponibilidad: 'Reserva con 3 días de anticipación'
      }
    ];
  }

  
  getGallery(): GalleryImage[] {
    return [
      {
        id: 'gal-001',
        titulo: 'Atardecer en Costa Azul',
        descripcion: 'Vista espectacular del atardecer desde nuestro restaurante principal',
        imagenUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        categoria: 'exteriores'
      },
      {
        id: 'gal-002',
        titulo: 'Piscina Infinity',
        descripcion: 'Piscina infinity con vista al océano Pacífico',
        imagenUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
        categoria: 'instalaciones'
      },
      {
        id: 'gal-003',
        titulo: 'Suite Presidencial',
        descripcion: 'Interior de nuestra lujosa suite presidencial',
        imagenUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
        categoria: 'habitaciones'
      },
      {
        id: 'gal-004',
        titulo: 'Restaurante Marea Alta',
        descripcion: 'Nuestro restaurante gourmet con cocina internacional',
        imagenUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
        categoria: 'gastronomia'
      },
      {
        id: 'gal-005',
        titulo: 'Playa Privada',
        descripcion: 'Acceso directo a nuestra playa privada',
        imagenUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
        categoria: 'exteriores'
      },
      {
        id: 'gal-006',
        titulo: 'Spa Serenidad',
        descripcion: 'Centro de spa con tratamientos de clase mundial',
        imagenUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
        categoria: 'instalaciones'
      }
    ];
  }

  
  sendContactRequest(request: ContactRequest): void {
    console.log('📧 Solicitud de contacto recibida:');
    console.log('Nombre:', request.nombre);
    console.log('Email:', request.email);
    console.log('Check-in:', request.fechaLlegada);
    console.log('Check-out:', request.fechaSalida);
    console.log('Mensaje:', request.mensaje);
    console.log('---');
    console.log('⚠️ NOTA: En producción, esta información se enviará al backend mediante HTTP POST');
    
    // Simulación de respuesta exitosa
    alert('¡Gracias por tu interés! Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.');
  }
}