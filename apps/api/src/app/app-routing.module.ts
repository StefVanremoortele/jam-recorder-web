import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@nestjs/core";

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./audioclip/audioclip.module')
  //     .then(m => m.AudioclipModule),
  // },
  // { path: '**', redirectTo: '' },
];

const config: any = {
  useHash: true,
  scrollPositionRestoration: 'enabled',
  initialNavigation: 'enabled'
};

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, config)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
