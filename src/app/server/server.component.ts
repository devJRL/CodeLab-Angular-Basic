import { Component } from '@angular/core';

// DECORATOR PATTERN FOR ANGULAR
@Component({
  // MATCH NAME!!
  selector: 'app-server',
  // RENDER ON TEMPLATE (HTML)
  templateUrl: './server.component.html',
  // FROM String
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
// MATCH NAME!!
export class ServerComponent {

  serverId: number = 10;
  serverStatus: String = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}