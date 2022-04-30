import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirlistModule } from './dirlist/dirlist.module';
import { DayOverviewModule } from './day-overview/day-overview.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DirlistModule,
    DayOverviewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
