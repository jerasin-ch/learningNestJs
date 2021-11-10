import { Module } from '@nestjs/common';
import { SaleOrderListController } from './controller/saleorderlist.controller';
import { SaleOrderListService } from './services/saleorderlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {SaleOrderListEntity} from './models/saleorderlist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SaleOrderListEntity])
  ],
  controllers: [SaleOrderListController],
  providers: [SaleOrderListService],
  exports: [SaleOrderListService]
})
export class SaleorderlistsModule {}
