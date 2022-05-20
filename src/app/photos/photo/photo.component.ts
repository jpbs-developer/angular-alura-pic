import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
const cloud = `${environment.api}/imgs/`;
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  private _url: string = '';
  @Input() description: string = '';

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = cloud + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }
}
