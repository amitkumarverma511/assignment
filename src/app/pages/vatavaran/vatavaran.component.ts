import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from '../../core/components/ui/weather/weather.component';
import { Store } from '@ngrx/store';
import * as locationActions from './../../state/location/location.actions';



@Component({
  selector: 'app-vatavaran',
  standalone: true,
  imports: [FormsModule,WeatherComponent],
  templateUrl: './vatavaran.component.html',
  styleUrl: './vatavaran.component.scss'
})
export class VatavaranComponent {
  apiService = inject(ApiService)
  store = inject(Store)
  cityName!:string;
  
  loadLocations(cityName:string) {
    this.store.dispatch(locationActions.loadLocations({cityName:cityName}));
  }
}
