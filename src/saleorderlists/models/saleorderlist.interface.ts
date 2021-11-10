export interface saleOrderList{
    id?:number;
    so_id: any;
    price_total: number;
    qty_total: number;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}