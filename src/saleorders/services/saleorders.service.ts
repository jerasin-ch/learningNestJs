import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SaleOrderEntity } from '../models/saleorder.entity';
import { saleOrder } from '../models/saleorder.interface';

import { SaleOrderListService } from '../../saleorderlists/services/saleorderlist.service';

@Injectable()
export class SaleordersService {
    constructor(
        @InjectRepository(SaleOrderEntity)
        private saleOrderRepository: Repository<SaleOrderEntity>,

        private saleOrderListService: SaleOrderListService
    ) { }

    async createSaleOrder(data: saleOrder): Promise<SaleOrderEntity> {
        const dataLength = Object.keys(data).length
        // console.log(dataLength);
        let price_total = 0
        let qty_total = 0
        let so_id: number
        for (let index = 0; index < dataLength; index++) {
            price_total = price_total + data[index].p_price
            qty_total = qty_total + data[index].p_qty
            so_id = data[index].so_id           
        }

        const saleOrderList = {
            so_id: so_id,
            price_total: price_total,
            qty_total: qty_total,
            status: 'wait'
        }
        console.log(data);    
        // await this.saleOrderListService.createSaleOrderList(saleOrderList)
        return await this.saleOrderRepository.save(data)
            
    }

    async getSaleOrderAll(): Promise<SaleOrderEntity[]>{
        const result = await this.saleOrderRepository.find()
        console.log(result);
        return result
    }

    async getSaleOrderById(id:number): Promise<SaleOrderEntity[]>{
        const result = await this.saleOrderRepository.find({ where: { so_id: id }});
        return result
    }

    async deleteSaleOrder(id: number): Promise<object>{
        const result = await this.saleOrderRepository.delete(id);
        return result ;
    }
}
