import { Component } from '@angular/core';

@Component({
  // DETECT IN `index.html` FOR COMPONENT <app-root>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // DETECT IN HTML {{ }} / [(ngModel)]="binding"
  name = 'SPONGE';
}
