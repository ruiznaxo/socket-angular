import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  username: string

  constructor(private wsServer: WebsocketService) { }

  ngOnInit(): void {
    this.wsServer.cargarStorage();
    this.username = this.wsServer.usuario.nombre;
  }

  salir(){
    this.wsServer.logoutWebSocket();
  }

}
