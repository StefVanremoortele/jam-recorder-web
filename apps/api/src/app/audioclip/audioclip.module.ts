import { MongooseModule } from '@nestjs/mongoose';
import { Audioclip, AudioclipSchema } from './schemas/audioclip-schema';
import { AudioclipService } from './audioclip.service';
import { AudioclipController } from './audioclip.controller';
import { Module } from '@nestjs/common';



@Module({
    imports: [MongooseModule.forFeature([{ name: Audioclip.name, schema: AudioclipSchema }])],
    exports: [],
    controllers: [AudioclipController],
    providers: [AudioclipService],
})
export class AudioclipModule { }
