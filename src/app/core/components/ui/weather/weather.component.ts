import { Component, Input, OnInit } from '@angular/core';
import { WeatherState } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  @Input() location: Location | null = null;
  weather: WeatherState | null = null;

  ngOnInit(): void {
    if (this.location) {
      this.weather = this.location?.weather;
    }
  }

}
