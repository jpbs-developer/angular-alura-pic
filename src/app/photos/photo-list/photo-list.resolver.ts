import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo.model';
import { PhotosService } from '../photo/photos.service';

@Injectable({ providedIn: 'root' })
export class PhotoListResolve implements Resolve<Photo[]> {
  constructor(private service: PhotosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photo[]> {
    const userName = route.paramMap.get('userName') ?? '';
    return this.service.listFromUserPaginated(userName, 1);
  }
}
