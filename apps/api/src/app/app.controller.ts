import { Controller, Get } from '@nestjs/common';

import { Message } from '@jamify/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('directories')
  getDirectotires(): any {
    return this.appService.getDirectories();
  }
}
