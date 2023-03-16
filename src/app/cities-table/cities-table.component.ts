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
  public citiesData: Array<Array<any>> = [];
  public citiesDataRaw: Array<any> = [];

  constructor(private readonly injector: Injector) {
    this.citiesService = this.injector.get(CitiesService);
    this.showHideLoaderService = this.injector.get(ShowHideLoaderService);
  }

  chunkArray(array: Array<Object>, chunkSize: number): Array<Array<Object>> {
    if (!Array.isArray(array) || !Number.isInteger(chunkSize) || chunkSize <= 0) return [];
    
    const length = array.length;
    const chunks = new Array(Math.ceil(length / chunkSize));
  
    for (let i = 0, j = 0; i < length; i += chunkSize, j++) {
      chunks[j] = array.slice(i, i + chunkSize);
    }
  
    // console.log(chunks);
    return chunks;
  }

  showCityInfo(city: any): void {}

  onCityClickHandler(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.showHideLoaderService.showLoaderAction();
    this.citiesService.getCities().subscribe({
      next: (data) => {
        this.showHideLoaderService.hideLoaderAction();
        const sortedData = data.sort((a: any, b: any) => a.name.localeCompare(b.name));
        this.citiesDataRaw = sortedData;
        this.citiesData = this.chunkArray(sortedData, 3);
        console.log(this.citiesData);
      },
      error: (error) => { this.showHideLoaderService.hideLoaderAction() }
    });
  }


  

}
