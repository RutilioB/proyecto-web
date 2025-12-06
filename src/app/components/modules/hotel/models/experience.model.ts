export interface Experience {
  id: string;
  titulo: string;
  descripcion: string;
  descripcionDetallada?: string;
  tipo: string; // 'aventura' | 'relajación' | 'gastronomía' | 'entretenimiento'
  icono: string;
  imagenUrl?: string;
  precio?: number;
  duracion?: string;
  incluye?: string[];
  disponibilidad?: string;
}