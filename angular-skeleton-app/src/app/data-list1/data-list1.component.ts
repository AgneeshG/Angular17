import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, ColGroupDef, GridReadyEvent, ITextFilterParams, GridApi, SideBarDef } from '@ag-grid-community/core';
import { GridDataLinkComponent } from './data-link.component';

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

declare var window: any;

@Component({
  selector: 'my-app',
  templateUrl: './data-list1.component.html',
})
export class DataList1Component {
  private gridApi!: GridApi;
  public columnDefs: (ColDef | ColGroupDef)[] = [

    {
      field: 'athlete',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        closeOnApply: true
      } as ITextFilterParams,
      enableRowGroup: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      pinned: 'left',
      lockPinned: true,
      cellRenderer: GridDataLinkComponent
    },
    {
      field: 'age',
      filter: 'agNumberColumnFilter',
      enableRowGroup: true,
    },
    {
      field: 'country',
      filter: 'agTextColumnFilter',
      enableRowGroup: true,
    },
    {
      field: 'year',
      filter: 'agNumberColumnFilter',
      enableRowGroup: true,
    },
    {
      field: 'sport',
      filter: 'agTextColumnFilter',
      enableRowGroup: true
    },
    {
      field: 'gold',
      enableValue: true,
      suppressMenu: true,
      filter: 'agNumberColumnFilter',
      aggFunc: 'sum',
    },
    {
      field: 'silver',
      enableValue: true,
      suppressMenu: true,
      filter: 'agNumberColumnFilter',
      aggFunc: 'sum',
    },
    {
      field: 'bronze',
      enableValue: true,
      suppressMenu: true,
      filter: 'agNumberColumnFilter',
      aggFunc: 'sum',
    },
    {
      field: 'total',
      enableValue: true,
      suppressMenu: true,
      filter: 'agNumberColumnFilter',
      aggFunc: 'sum',
    },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    floatingFilter: true,
  };

  sideBarDef: SideBarDef = {
    toolPanels: ['filters', 'columns'],
    defaultToolPanel: 'filters',
    position: 'left'
  }

  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) { }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }

  selectedRows: IOlympicData[] = [];
  selectedText: string = '';
  getCheckedRows() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data['athlete']);
    this.selectedRows = selectedData;
    console.log(this.selectedRows);
    this.selectedText = selectedData.join(', ');
  }
}