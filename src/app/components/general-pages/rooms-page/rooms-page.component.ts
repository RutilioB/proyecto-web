import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../../modules/hotel/services/hotel-data.service';
import { Room } from '../../modules/hotel/models/room.model';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html'
})
export class RoomsPageComponent implements OnInit {

  rooms: Room[] = [];
  selectedRoom: Room | null = null;
  showModal = false;

  constructor(private hotelDataService: HotelDataService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadRooms();
  }

  private loadRooms(): void {
    this.rooms = this.hotelDataService.getRooms();
  }

  onVerDetalles(room: Room): void {
    this.selectedRoom = room;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedRoom = null;
  }

  onReservar(room: Room): void {
    console.log('Reservar habitación:', room.nombre);
    alert(`Iniciar reserva de ${room.nombre}\nPrecio: $${room.precioPorNoche} por noche`);
  }
}