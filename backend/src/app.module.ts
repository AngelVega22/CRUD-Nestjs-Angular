import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductosModule, MongooseModule.forRoot('mongodb+srv://Angel:angel123@cluster0.hcebq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
