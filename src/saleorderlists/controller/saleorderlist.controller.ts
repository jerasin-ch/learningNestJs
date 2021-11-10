import { Controller, Post, Body, HttpException, HttpStatus, Get, UseGuards, Delete, Param } from '@nestjs/common';

import { SaleOrderListService } from '../services/saleorderlist.service';

import { saleOrderList } from '../models/saleorderlist.interface';
import { SaleOrderListEntity } from '../models/saleorderlist.entity';

import { JwtAuthGuard_User, JwtAuthGuard_Admin } from '../../users/auth/jwt-auth.guard';

@Controller('saleorderlists')
export class SaleOrderListController {
    constructor(private saleOrderListService: SaleOrderListService) { }

    @Post()
    @UseGuards(JwtAuthGuard_User)
    async createSaleOrderList(@Body() data: saleOrderList): Promise<string> {
        try {
            const result = await this.saleOrderListService.createSaleOrderList(data)
            if (result) {
                return 'Create Saleorder Success'
            }
            else {
                throw new HttpException('Error', HttpStatus.NOT_FOUND)
            }
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.BAD_REQUEST)
        }

    }

    @Get()
    @UseGuards(JwtAuthGuard_User)
    async getSaleOrderListAll(): Promise<SaleOrderListEntity[]> {
        try {
            return this.saleOrderListService.getSaleOrderListAll()
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':so_id')
    async deleteSaleOrderList(@Param() param): Promise<string> {
        try {
            const result = await this.saleOrderListService.deleteSaleOrderList(Number(param.so_id));
            if (result.affected > 0) {
                return 'Delete SaleOrder Success';
            }
            else {
                throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
            }
        }
        catch (err) {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }
    }
}
