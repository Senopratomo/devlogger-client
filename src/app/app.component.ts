import { Component } from '@angular/core';
import {FeathersService} from './services/feathers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FeathersService]
})
export class AppComponent {
  title = 'app works!';
}
