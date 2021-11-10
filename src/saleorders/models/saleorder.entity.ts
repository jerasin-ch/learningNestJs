import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";

//? ใช้สำหรับทำ validator และ return Error กลับไปให้ Client
import { IsEmail, IsString, IsNotEmpty, MinLength, IsNumber, IsDate } from 'class-validator';

import {SaleOrderListEntity} from '../../saleorderlists/models/saleorderlist.entity';

//? Entity is Name Column
@Entity('saleorder')
export class SaleOrderEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'so_id'})
    @IsNumber()
    @IsNotEmpty()
    so_id: number;

    @Column({unique: true})
    @IsNotEmpty()
    @IsString()
    p_name: string;

    @Column({type: 'float'})
    @IsNumber()
    @IsNotEmpty()
    p_price: number;

    @Column({type: 'int'})
    @IsNumber()
    @IsNotEmpty()
    p_qty: number;

    @Column()
    @IsString()
    status: string;

    @Column({type: 'date' , default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({type: 'date' , nullable: true })
    updatedAt?: Date;

    @ManyToOne(()=>SaleOrderListEntity, (saleOrderListEntity) =>{
        saleOrderListEntity.so_id
    },{onDelete: "CASCADE" , onUpdate: "CASCADE"} 
    )
    @JoinColumn({ name: 'so_id' })
    fk_so_id: SaleOrderListEntity;
}