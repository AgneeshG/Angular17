import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';




@NgModule({
  declarations: [],
  // standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StoreModule.forRoot(reducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument():[],
    // isDevMode() ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap:[AppComponent]
})
export class ModulesModule { }
