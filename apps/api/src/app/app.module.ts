import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core/router';
import { MongooseModule } from '@nestjs/mongoose';
import { AppRoutingModule } from './app-routing.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioclipModule } from './audioclip/audioclip.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://stef:Pass123@localhost/jamify?authSource=admin'),
    AudioclipModule,
    // AppRoutingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
