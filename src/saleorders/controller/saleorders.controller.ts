import { Controller , Post , Body , HttpException , HttpStatus , Get, Param, UseGuards , Delete } from '@nestjs/common';
import {SaleordersService} from '../services/saleorders.service';

import {saleOrder} from '../models/saleorder.interface';

import { SaleOrderEntity } from '../models/saleorder.entity';

import {JwtAuthGuard_Admin, JwtAuthGuard_User} from '../../users/auth/jwt-auth.guard';

@Controller('saleorders')
export class SaleordersController {
    constructor(private saleordersService:SaleordersService){}

    @Post()
    // @UseGuards(JwtAuthGuard_User)
    async createSaleOrders(@Body() data:saleOrder): Promise<string>{
        const result = await this.saleordersService.createSaleOrder(data)
        if(result){
            return 'Create Saleorder Success'
        }
        else{
            throw new HttpException('Error', HttpStatus.NOT_FOUND)
        }
        
    }

    @Get()
    @UseGuards(JwtAuthGuard_User)
    async getSaleOrderAll(): Promise<SaleOrderEntity[]>{
        try{
          return  this.saleordersService.getSaleOrderAll()
        }
        catch(err){
            throw new HttpException(err, HttpStatus.NOT_FOUND);
        }
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard_User)
    async getSaleOrderById(@Param() param): Promise<SaleOrderEntity[] | string>{
        try{
          const result =  this.saleordersService.getSaleOrderById(Number(param.id))
          if((await result).length > 0){
              return result;
          }  
          else{
              return 'Not Found';
          }       
        }
        catch(err){
            throw new HttpException(err, HttpStatus.NOT_FOUND);
        }
    }

    @Delete(':so_id')
    async deleteSaleOrder(@Param() param): Promise<string>{
       try{
        const result = await this.saleordersService.deleteSaleOrder(Number(param.so_id));
        if(result){
            return 'Delete SaleOrder Success';
        }
       }
       catch(err){
           throw new HttpException(err, HttpStatus.NOT_FOUND);
       }
    }
}
