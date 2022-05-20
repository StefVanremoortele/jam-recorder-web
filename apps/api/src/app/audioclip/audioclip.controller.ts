import { Controller, Get } from '@nestjs/common';

import { Message } from '@jamify/api-interfaces';
import { AudioclipService } from './audioclip.service';


@Controller('')
export class AudioclipController {
  constructor(private readonly audioclipService: AudioclipService) {}

  @Get('hello')
  getData(): Message {
    return this.audioclipService.getData();
  }

  // @Get('directories')
  // getDirectotires(): any {
  //   return this.audioclipService.getDirectories();
  // }

  @Get('audioclips')
  getAudioclips(): any {
    return this.audioclipService.getAudioclipsPerHour('2022-04-30');
  }
}
