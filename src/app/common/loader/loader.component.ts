import { Component, Injector, OnInit } from '@angular/core';
import { ShowHideLoaderService } from '../service/utilities/show-hide-loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  display?: Object;
  showHideLoaderService: ShowHideLoaderService;

  constructor(private readonly injector: Injector) {
    this.showHideLoaderService = this.injector.get(ShowHideLoaderService);
    this.setDisplay(false);
    this.showHideLoaderService
      .getLoaderStatus()
      .subscribe((showLoader: boolean) => {
        this.setDisplay(showLoader);
      });
  }

  setDisplay(showLoader: boolean) {
    this.display = showLoader ? 'd-block' : 'd-none';
  }
}
