import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


// @NgModule({
//   declarations:[],
//   imports:[StoreModule.forRoot({counter:counterReducer})],
//   bootstrap:[]
// })
// export class maints{

// }

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
