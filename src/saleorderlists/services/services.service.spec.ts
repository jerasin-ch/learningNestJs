import { Test, TestingModule } from '@nestjs/testing';
import { SaleOrderListService } from './saleorderlist.service';

describe('SaleOrderListService', () => {
  let service: SaleOrderListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleOrderListService],
    }).compile();

    service = module.get<ServicesService>(ServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
