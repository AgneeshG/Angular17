import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

export class CustomElements implements ICellRendererComp {
  eGui: HTMLElement | undefined;

  init(params: ICellRendererParams) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('custom-element');
    this.eGui.innerHTML = `
        <a href="https://www.google.com/search?q=${
          params.data.athlete
        }" target="_blank">${params.data.athlete}</a>
    `;
  }

  getGui() {
    return this.eGui!;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
