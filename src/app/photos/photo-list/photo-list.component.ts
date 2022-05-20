import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { Photo } from '../photo/photo.model';
import { PhotosService } from '../photo/photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;

  userName: string = this.route.snapshot.paramMap.get('userName') ?? '';
  currentPage: number = 1;

  constructor(private service: PhotosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.route.snapshot.data['photos'];
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.filterPhotos(filter);
  }

  filterPhotos(filter: string) {
    if (!filter) this.photos;

    return this.photos.filter((photo) =>
      photo.description.toLowerCase().trim().includes(filter)
    );
  }

  load() {
    this.service
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe({
        next: (photos) => {
          this.filter = '';
          this.setPhotos(photos);
        },
      });
  }

  getPhotos() {
    return this.filterPhotos(this.filter);
  }

  setPhotos(photos: Photo[]) {
    this.photos = this.photos.concat(photos);
    if (!photos.length) this.hasMore = false;
  }
}
