import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/Producto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`/productos`);
  }

  getProducto(id: string): Observable<Producto> {
    return this.http.get<Producto>(`/productos/${id}`);
  }

  createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`/productos/create`, producto);
  }

  deleteProducto(id: string): Observable<Producto> {
    console.log(id);
    return this.http.delete<Producto>(`/productos/delete?productoID=${id}`);
  }

  updateProducto(id: string, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`/productos/update?productoID=${id}`, producto);
  }
}
