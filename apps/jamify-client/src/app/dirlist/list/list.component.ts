import { NestedTreeControl } from '@angular/cdk/tree';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, map, of as observableOf, tap } from 'rxjs';



/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  children: FileNode[] | undefined;
  filename: string | undefined;
  type: any;
}

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    const dataObject = {} as any;
    for (let i = 0; i < 10; i++) {
      dataObject[i] = {
        propA: "1",
        propB: "2",
        child: {
          propA: "1",
          propB: "2"
        }
      };
    }

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(value: any, level: number): FileNode[] {
    let data: any[] = [];
    for (let k in value) {
      let v = value[k];
      let node = new FileNode();
      node.filename = `${k}`;
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level + 1);
      } else {
        node.type = v;
      }
      data.push(node);
    }
    return data;
  }
}

@Component({
  selector: 'jamify-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [FileDatabase]

})
export class ListComponent {
  nestedTreeControl: NestedTreeControl<FileNode>;

  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  directories$ = this.http.get<any>('/api/directories');

  constructor(database: FileDatabase, private http: HttpClient) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren as any);
    this.nestedDataSource = new MatTreeNestedDataSource();

    // database.dataChange.subscribe(data => {
    //   console.log(data);
    //   this.nestedDataSource.data = data
    // });
    // this.directories$.pipe(map(d => d.map((dt: any) => ({ filename: dt.filename, children: [] })))).subscribe(data => {
    this.directories$.pipe(tap(t => console.log(t))).subscribe(data => {
      console.log(data);
      this.nestedDataSource.data = data.map((d: any) => ({ filename: d.day, children: d.hours.map((dh: any) => ({ filename: dh.hour, children: dh.clips.map((c: any) => ({ filename: c.name, children: [], type: 'file', path: c.fullPath })) })).filter((d: any) => d.children.length > 0) })).filter((d: any) => d.children.length > 0)
    });
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };

  hasNestedChild = (_: number, nodeData: FileNode) => {
    // console.log(!nodeData.type)
    return !(nodeData.type);
  };

  play(url: any) {
    let audio = new Audio() as HTMLAudioElement;
    audio.src = 'http://localhost:3000/' + url.path;
    audio.load();
    audio.play();
  }


}
