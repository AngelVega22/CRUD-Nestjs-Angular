import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../../interfaces/Producto';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  term: any;
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos()
  }
  getProductos(): void {
    this.productoService.getProductos()
      .subscribe({
        next: (res) => { this.productos = res },
        error: (e) => console.log(e)
      })
  }

  deleteProducto(id: any) {
    this.productoService.deleteProducto(id)
      .subscribe(
        res => {
          this.getProductos();
        },
        err => console.log(err)
      )
  }

}
