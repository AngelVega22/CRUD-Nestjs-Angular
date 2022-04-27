import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductoDTO } from './dto/producto.dto';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {

    constructor(private productosService: ProductosService) { }

    //Crear Producto controller
    @Post('/create')
    async createProducto(@Res() res, @Body() createProductoDTO: CreateProductoDTO) {
        const producto = await this.productosService.createProducto(createProductoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Producto creado satisfactoriamente',
            producto
        });
    }

    //Listar todos los productos
    @Get('/')
    async getProductos(@Res() res) {
        const productos = await this.productosService.getProductos();
        return res.status(HttpStatus.OK).json(productos);
    }

    // GET un solo producto: /productos/6268b55d65b9cff01b6e58eb
    @Get('/:productoID')
    async getProducto(@Res() res, @Param('productoID') productoID) {
        const producto = await this.productosService.getProducto(productoID);
        if (!producto) throw new NotFoundException('Producto no existet!');
        return res.status(HttpStatus.OK).json(producto);
    }

    // Delete Producto: /delete?productoID=6268b55c65b9cff01b6e58e9
    @Delete('/delete')
    async deleteProducto(@Res() res, @Query('productoID') productoID) {
        const productoDeleted = await this.productosService.deleteProducto(productoID);
        if (!productoDeleted) throw new NotFoundException('Producto does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Producto eliminado satisfactoriamente',
            productoDeleted
        });
    }

    // Update Producto: /update?productoID=6268b55d65b9cff01b6e58eb
    @Put('/update')
    async updateProducto(@Res() res, @Body() createProductoDTO: CreateProductoDTO, @Query('productoID') productoID) {
        const updatedProducto = await this.productosService.updateProducto(productoID, createProductoDTO);
        if (!updatedProducto) throw new NotFoundException('Producto no existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Producto actualizado satisfactoriamente',
            updatedProducto
        });
    }
}
