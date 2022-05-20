import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequiresAuthenticateGuard } from '../core/guards/requires-authenticate.guard';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoListResolve } from './photo-list/photo-list.resolver';
import { PhotosComponent } from './photos.component';
const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
          photos: PhotoListResolve,
        },
      },
      {
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate: [RequiresAuthenticateGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
