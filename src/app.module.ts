import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { ProductsModule } from './products/products.module';
import { SaleordersModule } from './saleorders/saleorders.module';
import { SaleorderlistsModule } from './saleorderlists/saleorderlists.module';

import config from '../ormconfig'
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot(config),
    UsersModule,
    RoleModule,
    ProductsModule,
    SaleordersModule,
    SaleorderlistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
