import { Component, ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facturacion-NT';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(
    private dialog: MatDialog,  //Etiqueta para abrir un dialogo
  ) { }

}