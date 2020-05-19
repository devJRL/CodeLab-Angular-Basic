import { Component, OnInit } from '@angular/core';

@Component({
  // RECOMMEND!!
  // DEFAULT SELECTOR for ANGULAR OF TAG : <div app-servers></div> or <div class="app-servers"></div>
  // selector: 'app-servers',

  // CUSTOM SEELCTOR for ATTRIBUTE IN DIVTAG : <div app-servers></div>
  selector: '[app-servers]',

  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',

  // FROM CSS
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: String = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
