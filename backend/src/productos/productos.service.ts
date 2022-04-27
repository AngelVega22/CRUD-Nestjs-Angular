import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './interfaces/producto.interface';
import { CreateProductoDTO } from './dto/producto.dto';

@Injectable()
export class ProductosService {
    constructor(@InjectModel('Producto') private readonly productoModel: Model<Producto>) { }

    // Todos los Productos
    async getProductos(): Promise<Producto[]> {
        const productos = await this.productoModel.find();
        return productos;
    }

    // Un solo producto
    async getProducto(productoID: string): Promise<Producto> {
        const producto = await this.productoModel.findById(productoID);
        return producto;
    }

    // Crear producto
    async createProducto(createProductoDTO: CreateProductoDTO): Promise<Producto> {
        const newProducto = new this.productoModel(createProductoDTO);
        return newProducto.save();
    }

    // Eliminar Producto
    async deleteProducto(productoID: any): Promise<Producto> {
        const deletedProducto = await this.productoModel.findByIdAndDelete(productoID);
        return deletedProducto;
    }

    // Actualizar producto
    async updateProducto(productoID: string, createProductoDTO: CreateProductoDTO): Promise<Producto> {
        const updatedProducto = await this.productoModel
            .findByIdAndUpdate(productoID, createProductoDTO, { new: true });
        return updatedProducto;
    }
}
