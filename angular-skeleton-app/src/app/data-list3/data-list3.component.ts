import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Items } from './data';

export class Group {
  level = 0;
  parent: Group;
  expanded = false;
  totalCounts = 0;
  get visible(): boolean {
    return !this.parent || (this.parent.visible && this.parent.expanded);
  }
}

// interface DataDTO {
//   brand: string;
//   color: string;
//   vin: string;
//   year: number;
// }

interface DataDTO {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
};

@Component({
  selector: 'app-data-list3',
  templateUrl: './data-list3.component.html',
  styleUrls: ['./data-list3.component.css']
})
export class DataList3Component implements OnInit {

  dataSource = new MatTableDataSource<any>([]);
  _alldata: any[];
  columns: any[];
  displayedColumns: string[];
  groupByColumns: string[] = [];
  sortColumn: string = '';
  sortDirection: string = '';

  constructor() {
    this.columns = [
      {
        field: 'athlete',
        pinned: true
      },
      {
        field: 'age',
        pinned: false
      },
      {
        field: 'country',
        pinned: false
      },
      {
        field: 'year',
        pinned: false
      },
      {
        field: 'date',
        pinned: false
      },
      {
        field: 'sport',
        pinned: false
      },
      {
        field: 'gold',
        pinned: false
      },
      {
        field: 'silver',
        pinned: false
      },
      {
        field: 'bronze',
        pinned: false
      },
      {
        field: 'total',
        pinned: false
      }
    ];
    this.displayedColumns = this.columns.map((column) => column.field);
    this.groupByColumns = [];
  }

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this._alldata = [...Items];
    this.dataSource.data = this.addGroups(
      this._alldata,
      this.groupByColumns
    );
    // this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);
    // this.dataSource.filter = performance.now().toString();
    //this.dataSource.sort = this.sort;
  }

  tableDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  groupBy(event, column) {
    event.stopPropagation();
    this.checkGroupByColumn(column.field, true);
    this._alldata = [...Items];
    this.dataSource.data = this.addGroups(this._alldata, this.groupByColumns);
    // this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);
    // this.dataSource.filter = performance.now().toString();
    //this.dataSource.sort = this.sort;
  }

  sortDataByColumnField(sortState: Sort) {
    this.sortColumn = sortState.active;
    this.sortDirection = sortState.direction;
    this._alldata = [...Items];
    const sortedData = this.sortData(this._alldata);
    this.dataSource.data = this.addGroups(sortedData, this.groupByColumns);
    // this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);
    // this.dataSource.filter = performance.now().toString();
    //this.dataSource.sort = this.sort;
  }

  checkGroupByColumn(field, add) {
    let found = null;
    for (const column of this.groupByColumns) {
      if (column === field) {
        found = this.groupByColumns.indexOf(column, 0);
      }
    }
    if (found != null && found >= 0) {
      if (!add) {
        this.groupByColumns.splice(found, 1);
      }
    } else {
      if (add) {
        this.groupByColumns.push(field);
      }
    }
  }

  unGroupBy(event, column) {
    event.stopPropagation();
    this.checkGroupByColumn(column.field, false);
    this.dataSource.data = this.addGroups(this._alldata, this.groupByColumns);
    // this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);
    // this.dataSource.filter = performance.now().toString();
    //this.dataSource.sort = this.sort;
  }

  // below is for grid row grouping
  customFilterPredicate(data: any | Group, filter: string): boolean {
    return data instanceof Group ? data.visible : this.getDataRowVisible(data);
  }

  getDataRowVisible(data: any): boolean {
    const groupRows = this.dataSource.data.filter((row) => {
      if (!(row instanceof Group)) {
        return false;
      }
      let match = true;
      this.groupByColumns.forEach((column) => {
        if (!row[column] || !data[column] || row[column] !== data[column]) {
          match = false;
        }
      });
      return match;
    });

    if (groupRows.length === 0) {
      return true;
    }
    const parent = groupRows[0] as Group;
    return parent.visible && parent.expanded;
  }

  groupHeaderClick(row) {
    row.expanded = !row.expanded;
    this.dataSource.filter = performance.now().toString(); // bug here need to fix
  }

  addGroups(data: any[], groupByColumns: string[]): any[] {
    const rootGroup = new Group();
    rootGroup.expanded = true;
    return this.getSublevel(data, 0, groupByColumns, rootGroup);
  }

  getSublevel(
    data: any[],
    level: number,
    groupByColumns: string[],
    parent: Group
  ): any[] {
    if (level >= groupByColumns.length) {
      // return this.sortData(data);
      return data;
    }

    const groups = this.uniqueBy(
      data.map((row) => {
        const result = new Group();
        result.level = level + 1;
        result.parent = parent;
        for (let i = 0; i <= level; i++) {
          result[groupByColumns[i]] = row[groupByColumns[i]];
        }
        return result;
      }),
      JSON.stringify
    );

    const currentColumn = groupByColumns[level];
    let subGroups = [];
    groups.forEach((group) => {
      const rowsInGroup = data.filter(
        (row) => group[currentColumn] === row[currentColumn]
      );
      group.totalCounts = rowsInGroup.length;
      const subGroup = this.getSublevel(
        rowsInGroup,
        level + 1,
        groupByColumns,
        group
      );
      subGroup.unshift(group);
      // const subSortGroup = this.sortData(subGroup);
      const subSortGroup = subGroup;
      subGroups = subGroups.concat(subSortGroup);
    });
    return subGroups;
  }

  sortData(data: DataDTO[]): DataDTO[] {
    if (this.sortColumn != '' && this.sortDirection != '') {
      data = data.sort((a, b) => {
        if (this.sortDirection == 'desc') {
          return a[this.sortColumn] > b[this.sortColumn] ? -1 : 1;
        } else if (this.sortDirection == 'asc') {
          return b[this.sortColumn] > a[this.sortColumn] ? -1 : 1;
        }
      });
    } 
    return data;
  }

  uniqueBy(a, key) {
    const seen = {};
    return a.filter((item) => {
      const k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }

  isGroup(index, item): boolean {
    return item.level;
  }

  putLastColFirst() {
    this.displayedColumns.unshift(this.displayedColumns.pop());
  }

}