import { Module } from '@nestjs/common';
import { SaleordersService } from './services/saleorders.service';
import { SaleordersController } from './controller/saleorders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {SaleOrderEntity} from './models/saleorder.entity';

import {SaleorderlistsModule} from '../saleorderlists/saleorderlists.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SaleOrderEntity]),
    SaleorderlistsModule
  ],
  providers: [SaleordersService],
  controllers: [SaleordersController]
})
export class SaleordersModule {}
