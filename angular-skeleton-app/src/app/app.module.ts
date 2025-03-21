import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from '@ag-grid-community/angular';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { MultiFilterModule } from '@ag-grid-enterprise/multi-filter';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { CsvExportModule } from '@ag-grid-community/csv-export';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { SignupComponent } from './signup/signup.component';
import { GridDataLinkComponent } from './data-list1/data-link.component';

import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { DataListComponent } from './data-list/data-list.component';
// import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { DataList1Component } from './data-list1/data-list1.component';
import { DataList2Component } from './data-list2/data-list2.component';
import { DataList3Component } from './data-list3/data-list3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'






ModuleRegistry.registerModules([
  MenuModule,
  InfiniteRowModelModule,
  ClientSideRowModelModule,
  // SetFilterModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  MultiFilterModule,
  CsvExportModule
])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoHeaderComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightsComponent,
    SignupComponent,
    PhoneMaskDirective,
    DataListComponent,
    DataList1Component,
    DataList2Component,
    GridDataLinkComponent,
    DataList3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,    
    CdkTableModule,
    DragDropModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    CdkTableModule,
    DragDropModule,
    MatTableModule,
    PhoneMaskDirective,
    MatSortModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
