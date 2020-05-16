import { Component } from '@angular/core';

@Component({
  // DETECT COMPONENT <>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // DETECT IN HTML {{ }} / [(ngModel)]="binding"
  name = 'SPONGE';
}
