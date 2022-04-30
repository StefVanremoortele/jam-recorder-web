import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {MatTreeModule} from '@angular/material/tree'
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule
],
  exports: [ListComponent],
})
export class DirlistModule {}
