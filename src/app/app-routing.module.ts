import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { ImageResolver } from './resolvers/image.resolver';

import { GalleryComponent } from './components/gallery/gallery.component';
import { DialogImageEntryComponent } from './components/dialog-image/dialog-image-entry/dialog-image-entry.component';

const routes: Routes = [
  {
    path: 'images',
    canActivate: [AuthGuard],
    component: GalleryComponent
  },
  {
    path: 'images/:imageId',
    pathMatch: 'full',
    component: DialogImageEntryComponent,
    resolve: {
      image: ImageResolver,
    },
  },
  {
    path: '**',
    redirectTo: 'images'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
