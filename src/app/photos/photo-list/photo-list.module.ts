import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    LoadButtonComponent,
    PhotosComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    CardModule,
    DarkenOnHoverModule,
  ],
})
export class PhotoListModule {}
