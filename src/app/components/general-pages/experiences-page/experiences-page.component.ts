import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../../modules/hotel/services/hotel-data.service';
import { Experience } from '../../modules/hotel/models/experience.model';

@Component({
  selector: 'app-experiences-page',
  templateUrl: './experiences-page.component.html'
})
export class ExperiencesPageComponent implements OnInit {

  allExperiences: Experience[] = [];
  filteredExperiences: Experience[] = [];
  selectedFilter: string = 'todas';
  
  // Modal states
  showInfoModal = false;
  showReservaModal = false;
  selectedExperience: Experience | null = null;

  // Tipos de experiencias para filtros
  experienceTypes = [
    { value: 'todas', label: 'Todas' },
    { value: 'aventura', label: 'Aventura' },
    { value: 'relajación', label: 'Relajación' },
    { value: 'gastronomía', label: 'Gastronomía' },
    { value: 'entretenimiento', label: 'Entretenimiento' }
  ];

  constructor(private hotelDataService: HotelDataService) { }

  ngOnInit(): void {
    this.loadExperiences();
  }

  private loadExperiences(): void {
    this.allExperiences = this.hotelDataService.getExperiences();
    this.filteredExperiences = [...this.allExperiences];
  }

  onFilterChange(filterValue: string): void {
    this.selectedFilter = filterValue;
    
    if (filterValue === 'todas') {
      this.filteredExperiences = [...this.allExperiences];
    } else {
      this.filteredExperiences = this.allExperiences.filter(
        exp => exp.tipo === filterValue
      );
    }
  }

  onExperienceClick(experience: Experience): void {
    this.selectedExperience = experience;
    this.showInfoModal = true;
  }

  onReservarClick(experience: Experience): void {
    this.selectedExperience = experience;
    this.showReservaModal = true;
  }

  closeInfoModal(): void {
    this.showInfoModal = false;
    this.selectedExperience = null;
  }

  closeReservaModal(): void {
    this.showReservaModal = false;
    this.selectedExperience = null;
  }

  onReservar(experience: Experience): void {
    alert(`¡Gracias por tu interés en: ${experience.titulo}!\n\nPor favor contacta a nuestro concierge para completar tu reserva.`);
  }
}