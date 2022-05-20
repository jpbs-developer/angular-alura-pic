import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    PhotoListModule,
    PhotoFormModule,
  ],
})
export class PhotosModule {}
