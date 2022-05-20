import { Injectable, OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { Audioclip, AudioclipDocument } from './schemas/audioclip-schema';
import { Message } from '@jamify/api-interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { format, addDays, parse, parseISO, startOfDay, endOfDay, formatISO } from 'date-fns';
import { Db, MongoClient } from 'mongodb';

@Injectable()
export class AudioclipService implements OnModuleInit {
  db: Db;

  constructor(@InjectModel(Audioclip.name) private audioclipModel: Model<AudioclipDocument>) { }

  async onModuleInit() {
    const DB_CONNECTION_STRING = 'mongodb://stef:Pass123@localhost/jamify?authSource=admin';
    this.db = await (await MongoClient.connect(DB_CONNECTION_STRING)).db();
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  async getAudioclipsPerHour(day) {

    const audioclips = await this.audioclipModel.find({
      // startTime: {
      //   $lte: formatISO(new Date(), {representation: 'date'})
      // }
    })
    // console.log(audioclips.length)
    // return audioclips;
    return this.db.collection('audioclips').aggregate([
      { "$match": { "startTime": { "$gte": day } } },
      {
        $group: {
          _id: {
            hour: { $substr: ["$startTime", 11, 2] },
          },
          // filename: { $push: "$filename" },
          // size: { $push: "$size" },
          audioclips: {
            $push: {
              size: "$size",
              filename: "$filename",
              duration: "$duration",
              startTime: "$startTime",
            }
          },
        },
      },
      // {
      //   $count: {
      //     size: "$size"
      //   }
      // },
      {
        $project: {
          _id: 0,
          hour: "$_id.hour",
          audioclips: "$audioclips",
          // size: "$size",
        }
      },
      { $sort: { hour: 1 } }
    ]).toArray();
  }


}
