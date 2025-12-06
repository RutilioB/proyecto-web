import { Component, Input } from '@angular/core';
import { Metric } from '../../modules/hotel/models/metric.model';

@Component({
  selector: 'app-metrics-strip',
  templateUrl: './metrics-strip.component.html'
})
export class MetricsStripComponent {
  
  @Input() metrics: Metric[] = [];

  constructor() { }
}