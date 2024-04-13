import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from '../../core/components/ui/weather/weather.component';
import * as LocationsActions from './../../state/weather/loaction/location.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-vatavaran',
  standalone: true,
  imports: [FormsModule,WeatherComponent],
  templateUrl: './vatavaran.component.html',
  styleUrl: './vatavaran.component.scss'
})
export class VatavaranComponent implements OnInit {
  apiService = inject(ApiService)
  city:string = 'delhi'

  locations: Location[] = [];
  selectedLocation: Location | null = null;
  error: any | null = null;

  store = inject(Store)

  ngOnInit(): void {
    this.getCityWeather(this.city)
  }

  getCityWeather(city:string){
    this.apiService.get('data/2.5/weather',{q:city,appid:'d4594364698122bfd1c4b3eb5f2ff19f'}).subscribe(res =>{
      console.log(res);
    })
  }

  addLocation(cityName: string) {
    this.store.dispatch(LocationsActions.addLocation({ cityName }));
  }

  removeLocation(locationId: number) {
    this.store.dispatch(LocationsActions.removeLocation({ locationId }));
  }

  selectLocation(location: Location) {
    this.selectedLocation = location;
  }

  clearAllLocations() {
    this.store.dispatch(LocationsActions.clearLocations());
  }

}
