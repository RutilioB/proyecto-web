export interface Room {
  id: string;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga?: string;
  capacidad: number;
  precioPorNoche: number;
  imagenUrl: string;
  etiquetas: string[];
  amenidades: string[];
}