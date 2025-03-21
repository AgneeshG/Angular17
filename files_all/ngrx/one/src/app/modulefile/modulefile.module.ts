import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../shared/store/counter.reducer';
import { MaterialModule } from '../Material.Module';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from '../app.component';
import { MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, StoreModule.forRoot({counter:counterReducer}),
    MaterialModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  bootstrap: [AppComponent]
})
export class ModulefileModule { }
