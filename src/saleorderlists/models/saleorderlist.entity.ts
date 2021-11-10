import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";

//? ใช้สำหรับทำ validator และ return Error กลับไปให้ Client
import { IsEmail, IsString, IsNotEmpty, MinLength, IsNumber, IsDate } from 'class-validator';

import {SaleOrderEntity} from '../../saleorders/models/saleorder.entity';

//? Entity is Name Column
@Entity('saleorderlist')
export class SaleOrderListEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    @IsNumber()
    @IsNotEmpty()
    so_id: number;

    @Column({type: 'float'})
    @IsNumber()
    @IsNotEmpty()
    price_total: number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    qty_total: number;

    @Column()
    @IsString()
    status: string;

    @Column({type: 'date' , default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({type: 'date' , nullable: true })
    updatedAt?: Date;

    @OneToMany(() => SaleOrderEntity, saleOrderEntity => saleOrderEntity.so_id )
    pk_so_id: SaleOrderEntity;
}