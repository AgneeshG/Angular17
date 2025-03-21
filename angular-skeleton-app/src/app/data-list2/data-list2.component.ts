import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  ColDef,
  SideBarDef,
  GridOptions,
  GridApi,
  GridReadyEvent,
  IDateFilterParams,
  PaginationNumberFormatterParams,
} from '@ag-grid-community/core';
import { CustomElements } from '../CustomElements';

export interface IOlympicData {
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
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-list2.component.html',
  styleUrls: ['./data-list2.component.css'],
})
export class DataList2Component {
  title = 'datatable';

  columnDefs: ColDef[] = [
    {
      headerName: 'Athlete Site',
      valueGetter: 'node.id',
      cellDataType: 'text',
      sortable: true,
      field: 'athlete',
      filter: 'agTextColumnFilter',
      cellEditor: 'agTextCellEditor',
      editable: true,
      cellRenderer: CustomElements,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      enableRowGroup: true,
      menuTabs: ['generalMenuTab', 'filterMenuTab'],
    },

    {
      field: 'age',
      filter: 'agNumberColumnFilter',
      cellDataType: 'Number',
      sortable: true,
      menuTabs: ['filterMenuTab'],
    },
    {
      field: 'date',
      filter: 'agDateColumnFilter',
      sortable: true,
      menuTabs: ['filterMenuTab'],
    },
    {
      field: 'country',
      filter: 'agTextColumnFilter',
      sortable: true,
      menuTabs: ['filterMenuTab'],
    },
    {
      field: 'sport',
      filter: 'agTextColumnFilter',
      sortable: true,
      menuTabs: ['filterMenuTab'],
      hide: false,
    },
    {
      field: 'gold',
      filter: 'agNumberColumnFilter',
      sortable: true,
      menuTabs: ['filterMenuTab'],
    },
    {
      field: 'silver',
      filter: 'agNumberColumnFilter',
      sortable: true,
      menuTabs: ['filterMenuTab'],
    },
    {
      field: 'bronze',
      filter: 'agNumberColumnFilter',
      sortable: true,
      menuTabs: ['filterMenuTab'],
    },
    {
      field: 'total',
      filter: 'agNumberColumnFilter',
      sortable: true,
      menuTabs: ['filterMenuTab'],
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 250,
    filter: 'agTextColumnFilter',
    menuTabs: ['filterMenuTab'],
    floatingFilter: true,
    sortable: true,
    resizable: true,
    width: 100,
    enablePivot: true,
    enableValue: true,
  };

  sideBarDef: SideBarDef = {
    toolPanels: ['filters', 'columns'],
    defaultToolPanel: 'filters',
    position: 'left',
  };

  gridOptions: GridOptions = {
    maxConcurrentDatasourceRequests: 2,
    infiniteInitialRowCount: 1,
    scrollbarWidth: 20,
    suppressHorizontalScroll: false,
  };

  public rowData!: IOlympicData[];
  private gridApi!: GridApi;

  public paginationPageSize = 10;
  public paginationNumberFormatter: (
    params: PaginationNumberFormatterParams
  ) => string = (params: PaginationNumberFormatterParams) => {
    return '[' + params.value.toLocaleString() + ']';
  };
  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
    this.gridApi = params.api;
  }

  onPageSizeChanged() {
    var value = (document.getElementById('page-size') as HTMLInputElement)
      .value;
    this.gridApi.paginationSetPageSize(Number(value));
  }
  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }
  filterParams: IDateFilterParams = {
    comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split('/');
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    },
  };
}
