import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { ModulefileModule } from './modulefile/modulefile.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterbuttonComponent, CounterdisplayComponent,ModulefileModule, CustomcounterComponent, MatButtonModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'one';
}
       

// StoreModule.forRoot({counter:counterReducer})