import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, SideBarDef, GridOptions, GridReadyEvent, IDateFilterParams } from '@ag-grid-community/core';

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
	selector: 'app-data-list',
	templateUrl: './data-list.component.html',
	styleUrls: ['./data-list.component.css']
})
export class DataListComponent {
	title = 'app';

	// columnDefs: ColDef[] = [
	// 	{
	// 		headerName: 'Make',
	// 		field: 'make',
	// 		sortable: true,
	// 		filter: 'agSetColumnFilter',
	// 		flex: 1,
	// 		minWidth: 150,
	// 		menuTabs: ['filterMenuTab']
	// 	},
	// 	{
	// 		headerName: 'Model',
	// 		field: 'model',
	// 		sortable: true,
	// 		filter: 'agTextColumnFilter',
	// 		flex: 1,
	// 		minWidth: 150,
	// 		menuTabs: ['filterMenuTab']
	// 	},
	// 	{
	// 		headerName: 'Price',
	// 		field: 'price',
	// 		sortable: true,
	// 		filter: 'agSetColumnFilter',
	// 		flex: 1,
	// 		minWidth: 150,
	// 		menuTabs: ['filterMenuTab']
	// 	}

	// ];

	columnDefs: ColDef[] = [
		{
			headerName : 'Athlete',
			field: 'athlete',
			// pinned: 'left',
			// lockPinned: true,
			sortable: true,
			filter: 'agTextColumnFilter',
			// flex: 1,
			// minWidth: 150,
			menuTabs:  ['generalMenuTab', 'filterMenuTab'],
			checkboxSelection: true,
			headerCheckboxSelection: true,
			enableRowGroup: true
		},
		{
			field: 'age',
			filter: 'agNumberColumnFilter',
			sortable: true,
			maxWidth: 100,
			menuTabs: ['filterMenuTab']
		},
		{
			field: 'date',
			filter: 'agDateColumnFilter',
			sortable: true,
			menuTabs: ['filterMenuTab']
		},
		{
			field: 'country',
			filter: 'agSetColumnFilter',
			sortable: true,
			menuTabs: ['filterMenuTab'],
		},
		{
			field: 'sport',
			filter: 'agMultiColumnFilter',
			sortable: true,
			menuTabs: ['filterMenuTab'],
			hide: false
		},
		{
			field: 'gold',
			filter: 'agNumberColumnFilter',
			sortable: true,
			menuTabs: ['filterMenuTab']
		},
		{
			field: 'silver',
			filter: 'agNumberColumnFilter',
			sortable: true,
			menuTabs: ['filterMenuTab']
		},
		{
			field: 'bronze',
			filter: 'agNumberColumnFilter',
			sortable: true,
			menuTabs: ['filterMenuTab']
		},
		{
			field: 'total',
			filter: false,
			sortable: true,
			menuTabs: ['filterMenuTab']
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
		position: 'left'
	}

	gridOptions: GridOptions = {
		paginationPageSize: 50,
		maxConcurrentDatasourceRequests: 2,
		infiniteInitialRowCount: 1,
		scrollbarWidth: 20,
		suppressHorizontalScroll: false,
	};

	public rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' = 'always';
	public pivotPanelShow: 'always' | 'onlyWhenPivoting' | 'never' = 'always';


	public rowData!: IOlympicData[];

	constructor(private http: HttpClient) { }

	onGridReady(params: GridReadyEvent<IOlympicData>) {
		this.http
			.get<IOlympicData[]>(
				'https://www.ag-grid.com/example-assets/olympic-winners.json'
			)
			.subscribe((data) => (this.rowData = data));
	}
}