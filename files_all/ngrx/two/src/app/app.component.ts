import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModulefileModule } from './modulefile/modulefile.module';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { CustomcounterComponent } from './component/customcounter/customcounter.component';
import { MaterialModule } from './Material.Module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModulefileModule, MaterialModule, CounterbuttonComponent, CounterdisplayComponent, CustomcounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'two';
}
