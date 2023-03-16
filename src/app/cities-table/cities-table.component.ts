import { Component, Injector, OnInit } from '@angular/core';
import { ShowHideLoaderService } from '../common/service/utilities/show-hide-loader.service';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.css'],
})
export class CitiesTableComponent implements OnInit {
  private citiesService: CitiesService;
  private showHideLoaderService: ShowHideLoaderService;
  public citiesData: Array<any> = [];
  public selectedCity?: Object;

  constructor(private readonly injector: Injector) {
    this.citiesService = this.injector.get(CitiesService);
    this.showHideLoaderService = this.injector.get(ShowHideLoaderService);
  }

  onCityClickHandler(city: any) {
    this.selectedCity = city;
  }

  ngOnInit(): void {
    this.showHideLoaderService.showLoaderAction();
    this.citiesService.getCities().subscribe({
      next: (data) => {
        this.showHideLoaderService.hideLoaderAction();
        const sortedData = data.sort((a: any, b: any) => a.name.localeCompare(b.name));
        this.citiesData = sortedData;
      },
      error: (error) => { this.showHideLoaderService.hideLoaderAction() }
    });
  }


  

}
