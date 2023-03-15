import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowHideLoaderService {
  private showLoader: Subject<boolean> = new Subject<boolean>();
  showLoaderAction() { this.showLoader.next(true); }
  hideLoaderAction() { this.showLoader.next(false); }
  getLoaderStatus(): Subject<boolean> { return this.showLoader; }
}
