import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../../modules/hotel/services/hotel-data.service';
import { ContactRequest } from '../../modules/hotel/models/contact-request.model';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent implements OnInit {

  contactForm: ContactRequest = {
    nombre: '',
    email: '',
    fechaLlegada: '',
    fechaSalida: '',
    mensaje: ''
  };

  isSubmitting = false;

  contactInfo = {
    address: 'Av. Costera Miguel Alemán 123, Acapulco',
    phone: '+52 744 123 4567',
    whatsapp: '+52 744 123 4567'
  };

  constructor(private hotelDataService: HotelDataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    this.isSubmitting = true;

    this.hotelDataService.sendContactRequest(this.contactForm);

    this.resetForm();
    this.isSubmitting = false;
  }

  private isFormValid(): boolean {
    return !!(
      this.contactForm.nombre &&
      this.contactForm.email &&
      this.contactForm.fechaLlegada &&
      this.contactForm.fechaSalida &&
      this.contactForm.mensaje
    );
  }

  private resetForm(): void {
    this.contactForm = {
      nombre: '',
      email: '',
      fechaLlegada: '',
      fechaSalida: '',
      mensaje: ''
    };
  }
}