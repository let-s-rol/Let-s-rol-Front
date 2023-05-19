import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }
  compra(objeto: string) {
    // Aquí puedes agregar la lógica para procesar la compra del objeto
    // Puedes utilizar el nombre del objeto para realizar operaciones específicas
    console.log(`Has comprado el objeto: ${objeto}`);
  }
  ngOnInit(): void {
  }

}
