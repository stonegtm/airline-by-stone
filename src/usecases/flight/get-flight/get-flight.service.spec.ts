import { Test, TestingModule } from '@nestjs/testing';
import { GetFlightService } from './get-flight.service';

describe('GetFlightService', () => {
  let service: GetFlightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetFlightService],
    }).compile();

    service = module.get<GetFlightService>(GetFlightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
