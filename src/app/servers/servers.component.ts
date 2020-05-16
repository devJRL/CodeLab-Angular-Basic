import { Component, OnInit } from '@angular/core';

@Component({
  // RECOMMEND!!
  // DEFAULT SELECTOR for ANGULAR OF TAG : <div app-servers></div> or <div class="app-servers"></div>
  // selector: 'app-servers',

  // CUSTOM SEELCTOR for ATTRIBUTE IN DIVTAG : <div app-servers></div>
  selector: '[app-servers]',

  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,

  // FROM CSS
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
