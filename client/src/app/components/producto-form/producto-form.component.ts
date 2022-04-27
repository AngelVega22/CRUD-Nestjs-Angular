import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto: Producto = {
    nombre: '',
    marca: '',
    precio: 0,
    URL: ''

  };

  edit: boolean = false;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.productoService.getProducto(params['id'])
        .subscribe(
          res => {
            // console.log(res);
            this.producto = res;
            this.edit = true
          }
        )
    }
  }
  submitProducto() {
    this.productoService.createProducto(this.producto)
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.router.navigate(['/'])
        },
        error: (e) => console.log(e)
      })
  }
  updateProducto() {
    delete this.producto.createdAt;
    this.productoService.updateProducto(this.producto._id!, this.producto)
      .subscribe(
        res => {
          // console.log(res);
          this.router.navigate(['/producto'])
        },
        err => console.log(err)
      )


  }
}
