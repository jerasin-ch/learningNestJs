import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SaleOrderListEntity } from '../models/saleorderlist.entity';
import { saleOrderList } from '../models/saleorderlist.interface';
@Injectable()
export class SaleOrderListService {
    constructor(
        @InjectRepository(SaleOrderListEntity)
        private saleOrderListRepository: Repository<SaleOrderListEntity>
    ) { }

    async createSaleOrderList(data: saleOrderList): Promise<SaleOrderListEntity> {
            return await this.saleOrderListRepository.save(data);       
    }

    async getSaleOrderListAll(): Promise<SaleOrderListEntity[]>{
        return await this.saleOrderListRepository.find();
    }

    async deleteSaleOrderList(id:number): Promise<any>{
        return await this.saleOrderListRepository.delete(id);
    }
}
