import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() primaryButtonText: string = '';
  @Input() secondaryButtonText: string = '';
  @Input() imageUrl: string = '';

  constructor() { }

  onPrimaryButtonClick(): void {
    console.log('🎯 Botón primario del hero clickeado');
  }

  onSecondaryButtonClick(): void {
    console.log('🎯 Botón secundario del hero clickeado');
  }
}