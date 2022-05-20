import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayOverviewModule } from './day-overview/day-overview.module';
import { AudioclipComponent } from './audioclip/audioclip.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, AudioclipComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DayOverviewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
