import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../../modules/hotel/services/hotel-data.service';
import { Metric } from '../../modules/hotel/models/metric.model';
import { Experience } from '../../modules/hotel/models/experience.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  metrics: Metric[] = [];
  featuredExperiences: Experience[] = [];

  // Configuración del hero
  heroConfig = {
    title: 'Bienvenido a Costa Azul Oceanfront Hotel',
    subtitle: 'Tu paraíso frente al mar',
    description: 'Disfruta de la mejor experiencia de playa en El Salvador con todas las comodidades de un hotel de lujo',
    primaryButtonText: 'Explorar habitaciones',
    secondaryButtonText: 'Ver experiencias',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
  };

  constructor(private hotelDataService: HotelDataService) { }

  ngOnInit(): void {
    this.loadMetrics();
    this.loadFeaturedExperiences();
  }

  private loadMetrics(): void {
    this.metrics = this.hotelDataService.getMetrics();
  }

  private loadFeaturedExperiences(): void {
    const allExperiences = this.hotelDataService.getExperiences();
    // Mostrar solo las primeras 3 experiencias como destacadas
    this.featuredExperiences = allExperiences.slice(0, 3);
  }
}