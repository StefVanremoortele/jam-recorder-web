import { Injectable } from '@nestjs/common';
import { Message } from '@jamify/api-interfaces';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as _ from 'lodash';



async function walk(dir) {
  let files = await fs.readdir(dir);
  files = (await Promise.all(files.map(async file => {
    const filePath = path.join(dir, file);
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()) return walk(filePath);
    else if (stats.isFile()) return { folder: filePath.substring(26).split('/').splice(0, 2).join('/'), filename: filePath.substring(26).split('/')[2] };
  }) as string | [])).map(d => {
    return d
  });
  return files.reduce((all, folderContents) => all.concat(folderContents), []);
}

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
  async getDirectories(): Promise<any> {
    const dir_path = '/home/stef/audioclips/';
    const days_list = await fs.readdir(dir_path);
    const listing = [];

    // for (let day of days_list) {
    //   if (day) {
    //     const hour_items = [];
    //     for (let hour of (await fs.readdir(dir_path + day))) {
    //       const clips = [];
    //       (await fs.readdir(`${dir_path}/${day}/${hour}`)).forEach(clipname => clips.push(Object.assign({name: clipname}, {fullPath: `${day}/${hour}/${clipname}`})))
    //       hour_items.push({ hour, clips })
    //     }
    //     listing.push({ day, hours: hour_items});
    //   }
    // }

    let res = [];
    for (const day of days_list) {
      const listing = await fs.readdir(dir_path + day);
      const hour_res = []
      for (const hour of listing) {
        const hour_listing = await fs.readdir(`${dir_path}/${day}/${hour}`);
        hour_res.push({ hour, items: hour_listing.map(hl => ({filename: hl, path: `${day}/${hour}/`})) })
      }
      res = res.concat({day, items: hour_res})
    }


    // const res = await walk('./apps/api/src/assets/clips/');
    // var grouped = _.mapValues(_.groupBy(res, 'folder'),
    //   clist => clist.map(f => _.omit(f, 'folder')));
    // console.log(listing[0].hours)
    return res;
  }
}
