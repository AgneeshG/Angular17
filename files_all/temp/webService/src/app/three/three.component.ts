import { Component } from '@angular/core';

@Component({
  selector: 'app-three',
  standalone: true,
  // imports: [],
  template: `<h3>Hello angular component three</h3><br><p></p>`,
  styleUrl: './three.component.css'
})
export class ThreeComponent {
  show(){

  }
}



@Component({
  selector: 'four',
  standalone:true,
  // imports: [OneComponent, CommonModule, FormsModule, OneComponent],
  template: `<h3>Hello angular component four</h3><br><p></p>`,
  styles: ''
})

export class FourComponent{
  show(){

  }
}
