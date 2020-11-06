import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { DialogImageComponent } from './components/dialog-image/dialog-image.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {
    path: 'images',
    component: GalleryComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':imageId',
        pathMatch: 'full',
        component: DialogImageComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'images',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
