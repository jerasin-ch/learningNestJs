export interface saleOrder{
    id?:number;
    so_id: number;
    p_name: string;
    p_price: number;
    p_qty: number;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}