// import { NgModule } from '@angular/core';
// import { RouterModule, Routes, UrlSegment } from '@angular/router';
// import { AuthGuardService, NotAuthGuardService } from '@realworld/user/shared';
// import { LayoutComponent } from './layout.component';

// export function profilePathMatcher(url: UrlSegment[]) {
//   return url.length >= 1 && url[0].path.startsWith('@') ? ({consumed: url}) : null;
// }

// const routes: Routes = [
//   {
//     path: '',
//     component: LayoutComponent,
//     // children: [
//     //   {
//     //     path: '',
//     //     loadChildren: () => import('@realworld/article/feature')
//     //       .then(m => m.HomeModule)
//     //   },
//     // ]
//   },
// ]

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AudioclipRoutingModule { }
