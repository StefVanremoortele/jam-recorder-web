import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AudioclipDocument = Audioclip & Document;

@Schema()
export class Audioclip {
  @Prop()
  filename: string;

  @Prop()
  path: string;

  @Prop({ type: Date, required: true })
  startTime: Date;

  @Prop()
  size: number;

  @Prop()
  duration: number;
}

export const AudioclipSchema = SchemaFactory.createForClass(Audioclip);
