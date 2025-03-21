import {Component} from "@angular/core";
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from "ag-grid-community";

@Component({
    selector: 'data-link-component',
    template: `
          <span>
              <a href="javascript:void(0)" (click)="buttonClicked()">{{cellValue}}</a>              
          </span>
    `
})
export class GridDataLinkComponent implements ICellRendererAngularComp {
    public cellValue: string;

    // gets called once before the renderer is used
    agInit(params: ICellRendererParams): void {
        this.cellValue = this.getValueToDisplay(params);
    }

    // gets called whenever the cell refreshes
    refresh(params: ICellRendererParams): boolean {
        this.cellValue = this.getValueToDisplay(params);
        return true;
    }

    buttonClicked() {
        alert(`${this.cellValue}`)
    }

    getValueToDisplay(params: ICellRendererParams) {
        return params.valueFormatted ? params.valueFormatted : params.value;
    }
}