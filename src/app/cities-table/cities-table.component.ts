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
  showHideLoaderService: ShowHideLoaderService;

  constructor(private readonly injector: Injector) {
    this.citiesService = this.injector.get(CitiesService);
    this.showHideLoaderService = this.injector.get(ShowHideLoaderService);
  }

  ngOnInit(): void {
    this.showHideLoaderService.showLoaderAction();
    this.citiesService.getCities().subscribe((data) => {
      this.showHideLoaderService.hideLoaderAction();
      console.log(this.showHideLoaderService.getLoaderStatus());
      console.log('data', data);
    }, (error) => { this.showHideLoaderService.hideLoaderAction(); });
  }
}
