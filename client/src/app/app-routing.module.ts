import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
const routes: Routes = [
  {
    path: '',
    component: ProductosListComponent
  },
  {
    path: 'producto',
    component: ProductosListComponent
  },
  {
    path: 'producto/crear',
    component: ProductoFormComponent
  },
  {
    path: 'producto/editar/:id',
    component: ProductoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
